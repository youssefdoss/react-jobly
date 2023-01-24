import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation: Renders nav bar on every page
 *
 * App -> Navigation
 */
function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  )
}

export default Navigation;