import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIFT_KEY = import.meta.env.VITE_GIFY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function fetchVideos(query, per_page = 20) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return res.data;
}
export async function fetchGifs(q, limit = 20) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIFT_KEY, // API Key must be passed here
      q,
      limit,
    },
    // Headers object removed as GIPHY does not use Authorization headers
  });
  return res.data;
}
