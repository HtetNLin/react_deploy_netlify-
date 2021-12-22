
import './App.css' 
import About from './portfoliocontainer/Aboutme/About';
import Footer from './portfoliocontainer/Footer/Footer';
import Profile from './portfoliocontainer/Home/Profile'
import Navbar from './portfoliocontainer/Navbar/Navbar';
import Project from './portfoliocontainer/Project/Project';
import Skills from './portfoliocontainer/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
