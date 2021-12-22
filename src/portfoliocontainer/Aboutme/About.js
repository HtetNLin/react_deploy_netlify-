import "./About.css";
import Aos from 'aos';
import "aos/dist/aos.css";

import { useEffect } from "react";
const About = () => {
 
    useEffect(() => {
        Aos.init({duration:2000});
        }
    , [])
 
    return (
    <div>
      <h2 className="title" data-aos="fade-up">About me</h2>
      <div className="parent">
        <div className="container1" data-aos="fade-up">
            <div className="container1-background">

            </div>
        </div>

        <div className="container2" data-aos="fade-up">
          <div className="about-body">
            <p className="script">
              {" "}
              Hi , I'm Htet Nay Lin , junior web developer with background knowledge of MERN stack.I'm really passionate about learning new technologies and other programing languages or frameworks.Enable to do working with respect to team structure unity and maintaining the progress with good communication either in the team work or also in dealing with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
