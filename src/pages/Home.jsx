import "./styles/Home.css";
import Button from "../components/UI/Button";
import { ImageBack, ColorBack } from "../components/Layout/Wrapper";
import Navigation from "../components/Structure/Navigation";
import Quotes from "../components/UI/Quotes";
import Typewriter from "typewriter-effect";
import HorizontalRow from "../components/UI/HorizontalRow";
import { PortfolioData as ImageData } from "../data/main";

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
              />
              <Button
                to={"https://himakhaitan.medium.com/"}
                anchor
                color={"Red"}
                type={"outline"}
                text={"Checkout My Blog"}
              />
            </div>
          </div>
        </div>
      </ImageBack>
      <ColorBack color={"#242424"}>
        <h6 className="__head">Proof of Work</h6>
        <h2 className="whiteText">Web Addict made 20+ Websites in FY 2021</h2>
        <p className="portfolio__text">
          During my time as a Freelance Web Devloper I have made 20+ Websites. I
          have made Websites for various clients and also for myself. I have
          also managed some of the social medias as well.
        </p>
        <HorizontalRow color={"white"} />
        <div className="portfolio">
          {ImageData.map((item, index) => {
            return (
              <div key={index} className="portfolio__item">
                <img
                  loading="lazy"
                  className="portfolio__image"
                  alt="UI design by Himanshu Khaitan"
                  src={`${item.link}`}
                />
                <h5 className="whiteText">{item.category}</h5>
                <div className="portfolio__overlay">
                  <h3 className="whiteText">{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="portfolioCta">
          <Button
            to={"https://in.pinterest.com/himakhaitan/work-by-himakhaitan/"}
            anchor
            color={"White"}
            type={"fill"}
            text={"Explore my Portfolio"}
          />
        </div>
      </ColorBack>
    </>
  );
};

export default Home;
