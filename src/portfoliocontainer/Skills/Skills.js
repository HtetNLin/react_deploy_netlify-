import './Skills.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Skills = () => {
  Aos.init({duration:2000});
  useEffect(() => {
  
    
    }
  , [])




    return ( 
      <div>
            <h2 className="myskill" data-aos="flip-right">
              My Skills
            </h2>

        <div className="skill-parent">

          <div className="left-skill" data-aos="fade-right">

            <div className = "leftskill-inner-parent" >
            <p>Java</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent">
            <p>Node.js</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent">
            <p>React.js</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"80%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent">
            <p>Redux</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent">
            <p>Express.js</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          </div>

          <div className="right-skill" data-aos="fade-left">

          <div className = "rightskill-inner-parent">
          <p>Mongo Db</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent">
          <p>My Sql</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent">
          <p>Bootstrap Ui</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent">
          <p>Material Ui</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

             <div className = "rightskill-inner-parent">
            <p>Linux - Ubuntu</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

          </div>

        </div>


      </div>
     );
}
 
export default Skills;