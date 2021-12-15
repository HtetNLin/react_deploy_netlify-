import './Navbar.css';


const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark navcolor sticky-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Skills</a>
            </li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Navbar;