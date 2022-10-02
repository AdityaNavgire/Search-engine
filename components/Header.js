import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ImCross } from "react-icons/im";
import { HiOutlineViewGrid, HiOutlineMicrophone } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const route = useRouter();
  const searchRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchRef.current.value;
    if (!term) return;
    route.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => route.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={route.query.term}
          />
          <ImCross
            className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-150 transform hover:scale-200"
            onClick={() => (searchRef.current.value = "")}
          />
          <HiOutlineMicrophone className="mr-3 h-8 hidden sm:inline-flex text-blue-500 text-3xl border-l-2  border-gray-300 cursor-pointer pl-2" />
          <AiOutlineSearch className="hidden sm:inline-flex text-xl" />
          <button hidden type="submit" onClick={search} className="">
            search
          </button>
        </form>
        {/* <Avatar
          url="https://picsum.photos/200/300"
          className=" xl:ml-[45rem]"
        /> */}
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
