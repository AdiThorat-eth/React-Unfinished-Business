import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDI0YzUzY2Y3MzRlN2EzNzNmMjY3MmNlYWVhNTQzYSIsIm5iZiI6MTc2OTIzMDQ1NC45MzgsInN1YiI6IjY5NzQ1MDc2NjBlYzBmYzIzZDY5M2Q3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qMzNm7c3X_X8vMov876gSh_J2aMkEZ5lM86xjf_bCVs",
  },
});

export default instance;
