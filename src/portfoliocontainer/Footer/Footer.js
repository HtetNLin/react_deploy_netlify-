import './Footer.css';
import {useScrollTo} from 'react-use-window-scroll';
import { useEffect } from 'react';
import { useState } from 'react';

const Footer = () => {

   
        const scrollTo = useScrollTo();
        const [aboutScroll, setAboutScroll] = useState(null);
        const [skillScroll, setSkillScroll] = useState(null);
        const [prjScroll, setPrjScroll] = useState(1700);
  
          useEffect(() => {
            if(window.innerWidth <900){
              setAboutScroll(600)
              setSkillScroll(1090)
              setPrjScroll(1600)
            }else{
              setAboutScroll(400)
              setSkillScroll(1000)
              setPrjScroll(1700)
            }
        
          }, [window.innerWidth])
    return ( 
        <div>
               <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>HNL</h3>
                                <ul>
                                    <li><a className="cursor" onClick={() => scrollTo({top:1,left:0,behavior:"smooth"})}>Home</a></li>
                                    <li><a className="cursor" onClick={() => scrollTo({top:aboutScroll,left:0,behavior:"smooth"})}>About me</a></li>
                                    <li><a className="cursor" onClick={() => scrollTo({top:skillScroll,left:0,behavior:"smooth"})}>Skills</a></li>
                                    <li><a className="cursor" onClick={() => scrollTo({top:prjScroll,left:0,behavior:"smooth"})}>Projects</a></li>
                                </ul>
                            </div>
                            
                            <div class="col-md-6 item text">
                                <h3>Contact me</h3>
                                <p>Email</p>
                                <a>lin.mmdev@gmail.com</a>
                                <p>Phone</p>
                                <p>09-443105969</p>
                            </div>
                            <div class="col item social"><a href="https://www.facebook.com/htet.naylin.338/" target="_blank"> <i className="fa fa-facebook-square"></i></a><a href="https://www.instagram.com/_linious_/" target="_blank"> <i className="fa fa-instagram"></i></a></div>
                        </div>
                        <p class="copyright">HNL © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
     );
}
 
export default Footer;