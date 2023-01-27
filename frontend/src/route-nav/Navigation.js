import { useContext } from "react";
import userContext from "../contexts/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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
    <Navbar
      style={{position: 'sticky', top: 0, zIndex: 10}}
      bg="light"
      variant="light"
      className="nav px-3"
    >
      <Container>
        <Navbar.Brand href="/">
          Jobly
        </Navbar.Brand>
      </Container>

        {user ? (
          <Nav className="justify-content-end" >
            <Nav.Link href="/companies">Companies</Nav.Link>

            <Nav.Link href="/jobs">Jobs</Nav.Link>

            <Nav.Link href="/profile">Profile</Nav.Link>

            <Nav.Link style={{whiteSpace: 'nowrap'}}onClick={logout}>Log Out {user.username}</Nav.Link>
          </Nav>
        ) : (
          <Nav className="justify-content-end">
            <Nav.Link href="/login"> Log In</Nav.Link>

            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        )}
    </Navbar>
  );
}

export default Navigation;

