import './Navbar.css';
import {useScrollTo} from 'react-use-window-scroll';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
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
        <nav class="navbar navbar-expand-lg navbar-dark navcolor sticky-top">
        <a class="logo-name curosr" onClick={() => scrollTo({top:1,left:0,behavior:"smooth"})}>HNL</a>
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item active ">
              <a class="nav-link text-light cursor"  onClick={() => scrollTo({top:1,left:0,behavior:"smooth"})}>Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light cursor"  onClick={() => scrollTo({top:aboutScroll,left:0,behavior:"smooth"})}>About me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light cursor"  onClick={() => scrollTo({top:skillScroll,left:0,behavior:"smooth"})}>Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light cursor"  onClick={() => scrollTo({top:prjScroll,left:0,behavior:"smooth"})}>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Navbar;