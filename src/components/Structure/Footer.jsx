import "./styles/Footer.css";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { ImageBack } from "../Layout/Wrapper";
import Typewriter from "typewriter-effect";
import HorizontalRow from "../UI/HorizontalRow";
import { socials } from "../../data/main";
// Social Icons

import { AiFillHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <ImageBack className={"footer"}>
      <div className="footer__primary">
        <div className="footer__primary__left">
          <h2 className="footer__text">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer to be",
                  "Trying to be a Designer",
                  "Implementing long term Investments",
                  "Attesting values through Personal Brand",
                  "Fighting to be an Entrepreneur",
                  "Exploring Open Source",
                  "Fighting DSA",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h4 className="footer__sec">
            How about the idea of a coffee over meet?
          </h4>
          <p className="footer__data">
            I love interacting with people around. You can reach me through the
            platforms mentioned below. I am also a part of the platforms
            mentioned below. DMs are always welcome.
          </p>
        </div>
        <div className="footer__primary__right">
          <div>
            <p>himanshukhaitan108@gmail.com</p>
            <MdAlternateEmail className="footer__icon" />
          </div>
          <div>
            <p> Patna, India </p>
            <MdLocationOn className="footer__icon" />
          </div>
        </div>
      </div>
      <HorizontalRow color={"black"} />
      <div className="footer__secondary">
        <p className="copyright">
          &copy; 2021 | Made with <AiFillHeart /> by{" "}
          <strong>Himanshu Khaitan</strong>
        </p>
        <div className="socials">
          {socials.map((Icon, index) => {
            return (
              <a key={index} href={Icon.link} target="_blank">
                {Icon.icon}
              </a>
            );
          })}
        </div>
      </div>
    </ImageBack>
  );
};

export default Footer;
