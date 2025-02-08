import logo from "../assets/img/logo.png"
import "../styles/Global.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo"></img>
                <Link to="/" className="title-web">Web Portfolio</Link>
                
            </div>
            <div className="navbar-right">
                <Link to="/about-me" className="links">About Me</Link>
                <Link to="/projects" className="links">Projects</Link>
                <Link to="/experience" className="links">Experience</Link>
            </div>
        </nav>
    );
};

export default Navbar; 