import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import { Suspense } from "react";
import MovieProviders from "./movie-providers";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

export default async function MovieInfo({
  id,
  isSimple = false,
}: {
  id: string;
  isSimple?: boolean;
}) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      {isSimple ? (
        <Link href={`/movies/${id}`}>
          <h1 className={styles.title}>{movie.title}</h1>
        </Link>
      ) : (
        <>
          <img
            className={styles.poster}
            src={movie.poster_path}
            alt={movie.title}
          />
          <div className={styles.info}>
            <Link href={movie.homepage}>
              <h1 className={styles.title}>{movie.title}</h1>
            </Link>
            <h3>{`${movie.release_date} | ${movie.runtime} min`}</h3>
            <h3> ⭐️ {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <div>
              <Link href={`/movies/${id}/credits`}>Credits</Link>
              &ensp;|&ensp;
              {/* <Link href={`/movies/${id}/providers`}>Providers</Link>
              &ensp;|&ensp; */}
              <Link href={`/movies/${id}/similar`}>Similar movies</Link>
            </div>
            <MovieProviders id={id} />
          </div>
        </>
      )}
    </div>
  );
}
