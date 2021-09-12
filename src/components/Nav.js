import { useRouter } from "next/dist/client/router";
import requests from "../../utils/requests";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-8 sm:px-16 text-xl whitespace-nowrap space-x-8 sm:space-x-16 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre`)}
            className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-50 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}
