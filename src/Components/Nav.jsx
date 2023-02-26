import {HiSearch} from "react-icons/hi";
import {HiMenu} from "react-icons/hi";
import logo from "../assets/Garry.png";
export default function Nav(){ 
    return(
<nav className="navbar">
<div className="navbar-container">
<a href="#">
    <img src={logo} alt="Logo" className="navbar-logo" />
    </a>
    <div className="navbar-search">
    <input type="text" placeholder="Buscar" />
    <button><HiSearch/></button>
    </div>
    <button className="navbar-menu"><HiMenu></HiMenu></button>
    </div>
</nav>
    )
}