import { useContext } from "react";
import userContext from "../contexts/UserContext";
import Container from 'react-bootstrap/Container'


/** HomePage: renders home page with different message depending on logged
 * in status
 *
 * RoutesList -> HomePage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
  <Container
    className="text-center mt-3"
    style={{color: 'white'}}>
    <h1>Jobly</h1>
    <h3>All the jobs in one, convenient place</h3>
    {user && <p>Welcome back {user.username}!</p>}
  </Container>
  );
}

export default Homepage;