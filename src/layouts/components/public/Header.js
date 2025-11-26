import {
  FaHome,
  FaHandsHelping,
  FaRegUser,
  FaCartArrowDown,
} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import NavItem from "./NavItems";

function HomePageHeader() {
  return (
    <div className="flex justify-between shadow-md">
      <div className="w-15">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJer5Ed3byD6F_FLDwr8RuwEh_bsmudgzzQ&s"
          className="mx-5 my-3"
        />
      </div>
      <div className="flex">
        <ul className="flex items-center gap-10 mx-5">
          <NavItem to={"/"} icon={FaHome} label={"Home"} />
          <NavItem to={"/offer"} icon={BiSolidOffer} label={"Offer"} />
          <NavItem to={"/"} icon={FaHandsHelping} label={"Help"} />
          <NavItem to={"/login"} icon={FaRegUser} label={"Sign In"} />
          <NavItem to={"/"} icon={FaCartArrowDown} label={"Cart"} />
        </ul>
      </div>
    </div>
  );
}

export default HomePageHeader;
