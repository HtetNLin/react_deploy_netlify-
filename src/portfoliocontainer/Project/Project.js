import './Project.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Project = () => {

    useEffect(() => {

        Aos.init({duration:2000});
    }
        
, [])

  return (
    <div className="project-parent">
        <h3 className="myprojects"data-aos="fade-down">My Projects</h3>
      <div className="project-container">
        <a  className=" btn project-leftcontainer"data-aos="fade-down" href="https://pensive-feynman-82ac60.netlify.app/" target="_blank" >
      
        </a>

        <div className="project-rightcontainer" data-aos="fade-up">
           <div className="prj-script">
               <h3>MERN Project</h3>
               <h4>Technologies : React Node.js MongoDb Express.js</h4>
               <p>In this project, the main part of the client side is build with React and use the Redux flow to manage the state of the components.Styles of user interface is made with Material UI.The part of server side is build with Express ( server framework for Node.js ).Use the  Mongo Db to make the CRUD function for every posts. </p>
               <a href="https://github.com/HtetNLin/mern-fullstack-prj" target="_blank" className="btn github-icon"> <i class="fa fa-github" aria-hidden="true"></i>code</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
