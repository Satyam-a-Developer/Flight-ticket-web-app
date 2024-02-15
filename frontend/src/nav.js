
import {NavLink} from "react-router-dom"
// import './nav.css';
import "./component/nav.css"

function Nav() {
    return(
<>
<div className="nav">
<nav>
  <ul>
  <li>
      <NavLink to="/" >
     Home-Page
      </NavLink>
    </li>
  <li>
      <NavLink to="/buyprivatejet" >
      Buy-Private-Plane
      </NavLink>
    </li>

    <li>
    <NavLink to="/private" >
   Book-Private-Plane
    </NavLink>
    </li>
   
    
  </ul>
</nav>
 </div>
</>
        
    )
}
export default Nav;