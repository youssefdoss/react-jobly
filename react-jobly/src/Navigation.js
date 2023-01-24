import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation: Renders nav bar on every page
 *
 * App -> Navigation
 */
function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">Jobly</Link>
      <NavLink className="nav-link" to="/companies">Companies</NavLink>
      <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
    </nav>
  )
}

export default Navigation;