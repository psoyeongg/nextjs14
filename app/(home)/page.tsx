import Movie from "../../components/movie";
import RandomMovie from "../../components/random-movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <>
      <RandomMovie
        id={randomMovie.id}
        backdrop_path={randomMovie.backdrop_path}
        title={randomMovie.title}
        original_title={randomMovie.original_title}
        overview={randomMovie.overview}
      />

      <div className={styles.container}>
        <div className={styles.list}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
