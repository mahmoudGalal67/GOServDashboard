import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Helper from "../../../components/Helper";
import "./HeaderComponent.css";

const HeaderComponent = ({ label }) => {
  return (
    <>
      <div className="header-container-prd">
        <div className="nav-items">
          <FaHome className="nav-icon" />
          <Link to="/" className="nav-item-home">الرئيسية</Link>
          <span className="nav-item">/ {label}</span>
        </div>
        <div
          className="help-class"
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
