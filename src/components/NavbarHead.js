import { Link } from "react-router-dom";

const NavbarHead = () => {
    return (  
        <nav className="navvb">
        <div className="nav-wrapper">
          <Link class="brand-logo">React Project</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to='/UseState'>UseState</Link></li>
          <li><Link to='/useEffect'>Use Effect</Link></li>
          <li><Link to='/datafetching'>Data Fetching</Link></li>
          <li><Link to='/useContext'>Use Context</Link></li>
          <li><Link to='/useReducer'>Use Reducer</Link></li>
          <li><Link to='/reducer'>Use Context Reducer</Link></li>
          <li><Link to='/Alarm'>Alarm</Link></li>
          </ul>
        </div>
      </nav>
    
    );
}
 
export default NavbarHead;