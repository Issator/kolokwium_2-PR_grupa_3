import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <div>
		<Link to="/"> posts </Link>
		<Link to="/home"> JNhome </Link>
    </div>
  );
};

export default Navbar;