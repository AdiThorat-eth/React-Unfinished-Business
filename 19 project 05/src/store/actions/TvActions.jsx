export { removeTv } from "../reducers/TvSlice";
import axios from "../../utils/axios";
import { loadTv } from "../reducers/TvSlice";

export const asyncLoadTv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);

    // Find trailer, fallback to first video if no trailer exists
    const trailer =
      videos.data.results.find((m) => m.type === "Trailer") ||
      videos.data.results[0];

    let theUltimateDetails = {
      details: details.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: trailer, // This will now have the full video object with key property
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadTv(theUltimateDetails));
    console.log(theUltimateDetails);
    // console.log("Video Key:", trailer?.key); // Debug log
  } catch (error) {
    console.log("Error:", error);
  }
};
