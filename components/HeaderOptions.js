import HeaderOption from "./HeaderOption";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaMapMarkerAlt, FaNewspaper, FaPlay, FaSearch } from "react-icons/fa";
import { HiPhotograph } from "react-icons/fa";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly">
      <div className="flex space-x-6">
        <HeaderOption Icon={<FaSearch />} title="All" selected />
        <HeaderOption Icon={<HiPhotograph />} title="Images" />
        <HeaderOption Icon={<FaPlay />} title="Videos" />
        <HeaderOption Icon={<FaNewspaper />} title="News" />
        <HeaderOption Icon={<FaMapMarkerAlt />} title="Maps" />
        <HeaderOption Icon={<BiDotsVerticalRounded />} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link"> Settings</p>

        <p className="link"> Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
