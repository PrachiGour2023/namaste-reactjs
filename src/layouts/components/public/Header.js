import {
  FaHome,
  FaHandsHelping,
  FaRegUser,
  FaCartArrowDown,
  FaUserCircle,
} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import NavItem from "./NavItems";
import { GoDotFill } from "react-icons/go";
import { useOnlineStatus } from "../../../hooks/useOnlineStatus";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
import { useSelector } from "react-redux";

function HomePageHeader() {
  const onlineStatus = useOnlineStatus();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-md dark:bg-black">
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
          <NavItem to={""} icon={FaHandsHelping} label={"Help"} />
          <NavItem to={""} icon={FaRegUser} label={"Sign In"} />
          <NavItem
            to={"/cart"}
            icon={FaCartArrowDown}
            label={"Cart" + `(${cartItems.length})`}
          />
          <li className="mr-5">
            {/* <GoDotFill /> */}
            <FaUserCircle color="orange" size={35} />
          </li>
          <li onClick={toggleTheme}>
            {theme === "dark" ? (
              <FaToggleOff color="white" size={30} />
            ) : (
              <FaToggleOn color="orange" size={30} />
            )}
          </li>
        </ul>
        <div className="absolute right-32 top-10">
          <GoDotFill size={25} color={onlineStatus ? "green" : "red"} />
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
