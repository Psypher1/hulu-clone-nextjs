const API_KEY = process.env.API_KEY;

export default {
  getTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  getTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  getActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_28`,
  },
  getComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_35`,
  },
  getHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_27`,
  },
  getMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_9648`,
  },
  getRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_10749`,
  },
  getSciFiMovies: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_878`,
  },
  getAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_16`,
  },
  getTV: {
    title: "TV Show",
    url: `/discover/movie?api_key=${API_KEY}&with_genres_10770`,
  },
};
