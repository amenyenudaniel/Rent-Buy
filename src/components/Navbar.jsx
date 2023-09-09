import { Link } from "react-router-dom";
import "./styles.css";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="app-nav">
      <div className="navbar">
        <div>
          <Link className="linktag" to={"/"}>
            Rent&Buy
          </Link>
        </div>

        <div>
          <div>
            <div />

            <Link to={"/"} className="linktag">
              {/* <MenuItem icon={<FcHome />}> Home</MenuItem> */}
            </Link>
            <Link to={"/search"} className="linktag">
              {/* <MenuItem icon={<BsSearch />}>Search </MenuItem> */}
            </Link>
            <Link to={"/purpose=for-sale"} className="linktag">
              {/* <MenuItem icon={<FcAbout />}>Buy Property</MenuItem> */}
            </Link>
            <Link to={"/purpose=for-rent"} className="linktag">
              {/* <MenuItem icon={<FiKey />}>Rent Property</MenuItem> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-desktop">
        <div>
          <Link className="linktag" to={"/"}>
            Rent&Buy
          </Link>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Navbar;
