function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-gray-50 ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce " />
      <p className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
