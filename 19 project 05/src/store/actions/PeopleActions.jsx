export { removePeople } from "../reducers/PeopleSlice";
import axios from "../../utils/axios";
import { loadPeople } from "../reducers/PeopleSlice";

export const asyncLoadPeople = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let theUltimateDetails = {
      details: details.data,
      externalId: externalId.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };

    dispatch(loadPeople(theUltimateDetails));
    // console.log(theUltimateDetails);
    // console.log("Video Key:", trailer?.key); // Debug log
  } catch (error) {
    console.log("Error:", error);
  }
};
