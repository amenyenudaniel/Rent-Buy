import { Link } from "react-router-dom";
import "./styles.css";
import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(null);
  return (
    <div className="app__navbar">
      <div className="logo">
        <h1>Rent&Buy</h1>
      </div>
      <div className="app__navbar-links">
        <Link to={"/search"} className="linktag">
          <p>Search</p>
        </Link>
        <Link to={"/purpose=for-sale"} className="linktag">
          <p>Buy Property</p>
        </Link>
        <Link to={"/purpose=for-rent"} className="linktag">
          <p>Rent Property</p>
        </Link>
      </div>

      <FiMenu onClick={() => setToggleMenu(true)} className="menu__button" />
      {toggleMenu && (
        <div className="mobile__menu">
          <RiCloseLine
            className="close__button"
            onClick={() => setToggleMenu(false)}
          />
          <div className="app__navbar-links__mobile">
            <Link
              to={"/"}
              className="linktag flex"
              onClick={() => setToggleMenu(false)}
            >
              <FcHome className="menu__icon" />
              <p>Home</p>
            </Link>
            <Link
              to={"/search"}
              className="linktag flex"
              onClick={() => setToggleMenu(false)}
            >
              <BsSearch className="menu__icon" />
              <p>Search</p>
            </Link>
            <Link
              to={"/purpose=for-sale"}
              className="linktag flex"
              onClick={() => setToggleMenu(false)}
            >
              <FcAbout className="menu__icon" />
              <p>Rent Property</p>
            </Link>
            <Link
              to={"/purpose=for-rent"}
              className="linktag flex"
              onClick={() => setToggleMenu(false)}
            >
              <FiKey className="menu__icon" />
              <p>Buy Property</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
