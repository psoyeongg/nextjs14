"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/random-movie.module.css";

interface IRandomMovieProps {
  id: number;
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
}

export default function RandomMovie({
  id,
  backdrop_path,
  title,
  original_title,
  overview,
}: IRandomMovieProps) {
  const router = useRouter();
  return (
    <div className={styles.random}>
      <div
        style={{
          margin: 0,
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.3) 30%,
            rgba(20, 20, 20, 0.3) 30%,
            rgba(20, 20, 20, 0.95) 95%,
            rgba(20, 20, 20, 1) 100%
          ), url(${backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className={styles.info}>
        <h1>{original_title}</h1>
        <p>{overview}</p>
        <button onClick={() => router.push(`/movies/${id}`)}>ℹ Overview</button>
      </div>
    </div>
  );
}
