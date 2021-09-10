import { HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <heade className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="/images/hulu-logo.png"
        width={200}
        height={100}
      />
    </heade>
  );
}

export default Header;
