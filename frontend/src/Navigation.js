import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./UserContext";
import "./Navigation.css";

/** Navigation: Renders nav bar on every page with varying displays
 * depending on if user is logged in
 *
 * Props:
 * - logout: Function to logout
 *
 * JoblyApp -> Navigation
 */
function Navigation({ logout }) {
  const { user } = useContext(userContext);
  return (
    <nav className="nav">
      <Link to="/">Jobly</Link>
      {user ? (
        <>
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" onClick={logout}>Log out {user.username}</NavLink>
        </>
      ) : (
        <>
          <NavLink className="nav-link" to="/login">Log In</NavLink>
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  )
}

export default Navigation;