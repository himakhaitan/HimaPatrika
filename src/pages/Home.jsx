import "./styles/Home.css";

import Button from "../components/UI/Button";
import { ImageBack, ColorBack } from "../components/Layout/Wrapper";
import Navigation from "../components/Structure/Navigation";
import Quotes from "../components/UI/Quotes";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <ImageBack>
        <Navigation />
        <Quotes
          quote="Investing in Yourself is not about you. It's about putting your stamp on the value you deliver to others."
          author="William Arruda"
        />
        <div className="owner">
          <div className="owner__img--div">
            <img
              alt="Himanshu Khaitan"
              className="owner--img"
              src="./images/himanshu.webp"
            />
          </div>
          <div className="ownerDetails">
            <h4>
              <Typewriter
                options={{
                  strings: [
                    "Namaste! This is",
                    "Hola! This is",
                    "Bonjour! This is",
                    "Ciao! This is",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <h2>Himanshu Khaitan.</h2>
            <h2>adding Values while acquiring skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              auctor mauris eu neque sagittis, lacinia mattis ante vehicula.
              Vestibulum quis convallis elit. Aenean sit amet erat urna. In
              maximus quam mauris. Quisque lobortis maximus nulla nec suscipit.
              Duis et dictum lacus, at sagittis justo.
            </p>
            <div className="owner__button">
              <Button
                to="/about"
                color={"Black"}
                type={"fill"}
                text={"About Me"}
                variant="contained"
                size="large"
              >
                About Me
              </Button>
              <Button
                to="/portfolio"
                color={"Red"}
                type={"outline"}
                text={"About Me"}
              >
                Checkout My Portfolio
              </Button>
            </div>
          </div>
        </div>
      </ImageBack>
      <ColorBack color={"#353535"}></ColorBack>
    </>
  );
};

export default Home;
