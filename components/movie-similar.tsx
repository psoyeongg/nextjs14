import styles from "../styles/movie-similar.module.css";
import { API_URL } from "../app/constants";
import Movie from "./movie";

export async function getSimilars(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return await response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similars = await getSimilars(id);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {similars.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
