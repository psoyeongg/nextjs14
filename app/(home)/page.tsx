"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    // 브라우저가 요청을 보내므로 클라이언트 컴포넌트에서만 호출 가능
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );

    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
