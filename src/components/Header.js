import Image from "next/image";

function Header() {
  return (
    <heade className="">
      <h2 className="text-3xl">I am header</h2>
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
