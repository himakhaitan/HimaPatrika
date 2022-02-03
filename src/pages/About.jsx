import { ImageBack, ColorBack } from "../components/Layout/Wrapper";
import "./styles/About.css";
import Quotes from "../components/UI/Quotes";
const About = () => {
  return (
    <>
      <ImageBack>
        <div className="about__main">
          <div className="about__primary">
            <Quotes
              className="about__quotes"
              quote="Vision is the first step in creating the future. Values are the second step in creating the future but it takes actions to make those vision come true."
              author="Himanshu Khaitan"
            />
            <h1 className="about__head about__head__one">Let's Talk about</h1>
            <h1 className="about__head about__head__two">Myself</h1>
          </div>
          <div>
            <img className="about__img" src="./images/about__banner.jpg" />
          </div>
        </div>
      </ImageBack>
      <ColorBack color={"#242424"}>
        <h2 className="whiteText about__sec__head">About Me</h2>
        <p className="whiteText about__text">
          I am a self-taught{" "}
          <span className="bold">Freelance Full Stack Developer</span> and{" "}
          <span className="bold">Social Media Manager</span> I love learning new
          things and I am always looking to improve my skills. I am a big
          finance enthusiast exploring businesses and investing in those I love.
        </p>
        <p className="whiteText about__text">
          I have a keen interest in the field of development. At present I am
          pushing my self for content creation on various platforms like
          Twitter, Medium and Dev.to Along with this I am also working on
          building a community for Tech and Finance interested people called the{" "}
          {""}
          <span className="bold">Evident Audit</span>
        </p>
        <p className="whiteText about__text">
          In my mean time I love reading and writing about tech and finance.
          There is a soft side in me for startups and entrepreneurship.
          <br />
          Being a Freelancer, Content-Creator, Social Media Manager, Tech
          Enthusiast and a Community Builder I also play a role of college
          student in my college.
        </p>
      </ColorBack>
    </>
  );
};

export default About;
