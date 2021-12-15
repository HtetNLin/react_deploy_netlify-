
import './App.css' 
import About from './portfoliocontainer/Aboutme/About';
import Profile from './portfoliocontainer/Home/Profile'
import Navbar from './portfoliocontainer/Navbar/Navbar';
import Skills from './portfoliocontainer/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
