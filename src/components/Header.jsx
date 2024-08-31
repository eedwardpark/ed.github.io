import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="min-w-full bg-deep-blue">
    <div className=" header-container">
      <div className="header-content">
        <div className="flex items-center justify-between p-2">
          <div className="text-white flex ml-auto">
            <Link
              to="/"
              className="font-medium text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0 undefined link"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0 undefined link"
            >
              About
            </Link>
            <Link
              to="/project"
              className="font-medium text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0 undefined link"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
