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
      <h2 className="title" data-aos="flip-left">About me</h2>
      <div className="parent">
        <div className="container1" data-aos="fade-up">
            <div className="container1-background">

            </div>
        </div>

        <div className="container2" data-aos="fade-left">
          <div className="about-body">
            <p className="script">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo,
              et nisi assumenda obcaecati expedita officia, enim, eius fugiat id
              repellendus temporibus vitae quos ipsum? Accusamus, tempore non.
              Commodi, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur aliquam consequuntur autem alias culpa facere. Labore accusamus repellendus alias dolores ratione facilis libero at, animi dolorem nisi amet corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
