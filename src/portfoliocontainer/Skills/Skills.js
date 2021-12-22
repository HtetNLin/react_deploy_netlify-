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
            <h2 className="myskill" data-aos="fade-down">
              My Skills
            </h2>

        <div className="skill-parent">

          <div className="left-skill" data-aos="fade-up">

            <div className = "leftskill-inner-parent text-secondary" >
            <p>Java</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent text-success">
            <p>Node.js</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent text-info">
            <p>React</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"80%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent text-primary">
            <p>Redux</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>

            <div className = "leftskill-inner-parent text-success">
            <p>Express</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          </div>

          <div className="right-skill" data-aos="fade-up">

          <div className = "rightskill-inner-parent mongo-color">
          <p>Mongo Db</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent text-warning">
          <p>My Sql</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent bootstrap-color">
          <p>Bootstrap Ui</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

           <div className = "rightskill-inner-parent mui-color">
          <p>Material Ui</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:"60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>

             <div className = "rightskill-inner-parent ubuntu-color">
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