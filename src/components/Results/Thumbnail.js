import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2>{result.title || result.original_title}</h2>
        <p className="flex items-center">
          {result.media_type && `${result.media_type} `}
          {result.release_date || result.first_release_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}
