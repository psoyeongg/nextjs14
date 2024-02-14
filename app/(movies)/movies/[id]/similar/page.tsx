import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieSimilar from "../../../../../components/movie-similar";

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
export default async function Similar({ params: { id } }: IParams) {
  return (
    <>
      <Suspense>
        <MovieInfo id={id} isSimple />
      </Suspense>
      <Suspense fallback={<h1>Loading movie similar</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
    </>
  );
}
