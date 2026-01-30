import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPeople, removePeople } from "../store/actions/PeopleActions";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const PeopleDetails = () => {
  document.title = "YoYo Peoples | Details ";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] h-screen w-screen bg-[#1F1E24] h-[160vh] overflow-y-hidden ">
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line cursor-pointer hover:text-[#6556CD] text-zinc-400 font-semibold"
        ></i>
      </nav>

      <div className="w-full flex">
        {/* Part 2: Left Poster and Details */}
        <div className="w-[20%]">
          <img
            className="h-[35vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-lg mb-5"
            src={`https://image.tmdb.org/t/p/original/${
              info.details.poster_path || info.details.profile_path
            }`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* Social Media Links */}
          <div className="text-2xl flex gap-x-5 text-white">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="ri-earth-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i className="ri-instagram-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalId.twitter_id}`}
            >
              <i className="ri-twitter-x-fill hover:text-[#6556CD]"></i>
            </a>
          </div>

          {/* Personal Info */}
          <h1 className="text-2xl text-zinc-400 font-semibold mt-5">
            Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Known for</h1>
          <h1 className="text-zinc-400 mb-2">
            {info.details.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Gender</h1>
          <h1 className="text-zinc-400 mb-2">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Birthday</h1>
          <h1 className="text-zinc-400 mb-2">{info.details.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Deathday</h1>
          <h1 className="text-zinc-400 mb-2">
            {info.details.deathday ? info.details.deathday : "Still Alive"}
          </h1>
        </div>

        {/* Part 3: Right Details and Info */}
        <div className="w-[80%] pl-10">
          <h1 className="text-6xl text-zinc-400 font-black mt-5">
            {info.details.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-2">
            Biography
          </h1>
          <p className="text-zinc-400 mt-3 text-justify h-[20vh] overflow-y-auto leading-6 pr-5">
            {info.details.biography}
          </p>

          <h1 className="mt-5 text-lg text-zinc-400 font-semibold">
            Movies and Shows
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
