import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieActions";
import {
  Link,
  useNavigate,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const MovieDetails = () => {
  document.title = "YoYo Movies | Movies ";

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.9)),
         url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen h-[137vh] p-10 overflow-y-hidden relative"
    >
      {/* part 1 navigation */}
      <nav className="w-full text-zinc-100 flex gap-10 text-2xl">
        {/* <Link> */}
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line mr-2 cursor-pointer hover:text-[#6556CD] text-zinc-400 font-semibold"
        ></i>
        {/* </Link> */}
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6556CD]"></i>
        </a>

        <a
          className="hover:text-[#6556CD]"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full flex ml-10 mt-10">
        <img
          className="h-[30vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={`https://image.tmdb.org/t/p/original/${info.details.poster_path}`}
          alt=""
        />

        <div className="content ">
          <h1 className="ml-5 text-4xl font-black text-center">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            &nbsp;
            <span className="text-xl font-bold text-zinc-300">
              ({info.details.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="flex">
            <span className="absolute left-[16%] top-[16%] rounded-full text-lg font-semibold bg-yellow-500 w-[7vh] h-[7vh] justify-center items-center text-center pt-3">
              {info.details.vote_average.toFixed(1)}
              <sup>%</sup>
            </span>

            <div className="flex mt-5 flex-col">
              <div className="flex ml-20 gap-5">
                <h1>User Score</h1>
                <h1>{info.details.release_date}</h1>
              </div>
              <div className="flex ml-6 mt-5 flex-col gap-2">
                <h1 className="font-semibold bg-[#6556CD]/30 rounded-lg px-2 text-center py-1">
                  {info.details.genres.map((g, i) => g.name).join(", ")}
                </h1>
                <div className="max-w-70 ">
                  <h1>{info.details.tagline}</h1>
                </div>
                {/* <p className="text-sm">{info.details.overview}</p> */}
                <Link
                  className="px-4 py-2 rounded-lg bg-[#6556CD] w-fit mt-2"
                  to={`${pathname}/trailer`}
                >
                  <i className="ri-play-fill mr-2"></i>
                  Play Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 platforms */}
      <div className="w-[20vh] ml-10 mt-5 min-h-34">
        <div className="">
          {info.watchProvider && info.watchProvider.flatrate && (
            <div className="flex items-center mb-2 w-full">
              <div className="w-[35%] mr-2">
                <h1 className="text-sm ">Flatrate</h1>
              </div>
              <div className="flex justify-between w-[60%]">
                {info.watchProvider.flatrate.map((w, i) => (
                  <img
                    title={w.provider_name}
                    className="h-[5vh] rounded-xl object-cover"
                    key={i}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}

          {info.watchProvider && info.watchProvider.rent && (
            <div className="flex items-center mb-2 w-full">
              <div className="w-[35%] mr-2">
                <h1 className="text-sm ">Rent</h1>
              </div>
              <div className="flex justify-between w-[60%]">
                {info.watchProvider.rent.map((w, i) => (
                  <img
                    title={w.provider_name}
                    className="h-[5vh] rounded-xl object-cover"
                    key={i}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}

          {info.watchProvider && info.watchProvider.buy && (
            <div className="flex items-center mb-2 w-full">
              <div className="w-[35%] mr-2">
                <h1 className="text-sm ">Buy</h1>
              </div>
              <div className="flex justify-between w-[60%]">
                {info.watchProvider.buy.map((w, i) => (
                  <img
                    title={w.provider_name}
                    className="h-[5vh] rounded-xl object-cover"
                    key={i}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* part 4 recommendations and similar stuff */}
      <h1 className="text-2xl font-semibold mt-5">
        Recommendation & similar stuff
      </h1>
      <HorizontalCards
        h={`50vh`}
        h2={`60vh`}
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
