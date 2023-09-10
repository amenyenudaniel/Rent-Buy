import "./styles.css";
import house from "../assets/house2.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaHome,
  FaYoutube,
} from "react-icons/fa";
import { footerData } from "../utils/data";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__image">
        <img src={house} alt="house__img" className="house__img" />
      </div>
      <div>
        <h1 className="footer__logo">Rent&Buy</h1>
        <div className="footer__links__icon">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaTiktok />
        </div>

        <footer>
          <div className="app__footer__links">
            {footerData.map((item) => (
              <div key={item.id} className="footer__links__container">
                <h4>{item.title}</h4>
                {item.subLinks.map((link) => (
                  <p key={link.id}>{link.linkName}</p>
                ))}
              </div>
            ))}
          </div>

          <p className="download">
            Download the Rent&Buy app for <span>Android</span> and{" "}
            <span>IOS</span> .
          </p>
          <p className="copyright">
            &copy; 2023 Rent&Buy Group Inc. All right reserved.{" "}
            <span>
              Terms of <br /> Service
            </span>{" "}
            and <span>Privacy Policy</span>.
          </p>

          <p className="screen__readers">
            If you are using a screen reader, or are having difficulty reading
            this website, <br />
            please email <span>accessibilityfeedback@rent&buy.com</span>.
          </p>

          <div className="footer__last">
            <FaHome className="home__logo" />
            <h1>Rent&Buy</h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
