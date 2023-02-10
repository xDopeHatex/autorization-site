import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link
      to={"/"}
      className="text-white bg-slate-800 text-center md:py-5 block  py-2  font-extrabold md:text-5xl text-xl"
    >
      DBD
    </Link>
  );
}

export default Header;
