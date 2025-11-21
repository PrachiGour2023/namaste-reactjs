import React from "react";
import "./index.css";
import {
  FaHome,
  FaHandsHelping,
  FaRegUser,
  FaCartArrowDown,
} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

function HomePageHeader() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJer5Ed3byD6F_FLDwr8RuwEh_bsmudgzzQ&s"
          className="logo-design"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-container">
          <FaHome />
          <li>Home</li>
          <BiSolidOffer />
          <li>Offer</li>
          <FaHandsHelping />
          <li>Help</li>
          <FaRegUser />
          <li>Sign In</li>
          <FaCartArrowDown />
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePageHeader;
