import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaMapMarkerAlt, FaNewspaper, FaPlay, FaSearch } from "react-icons/fa";
import { HiPhotograph } from "react-icons/fa";

function HeaderOption({ title, selected, Icon }) {
//   console.log(Icon, "Icon");
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer `}
    >
      {/* {Icon} */}
      <p className="">{title}</p>
    </div>
  );
}

export default HeaderOption;

// ${
//     selected && "text-blue-500 border-blue-500"
//   }