import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Credits({ params: { id } }: IParams) {
  return (
    <>
      <Suspense>
        <MovieInfo id={id} isSimple />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </>
  );
}
