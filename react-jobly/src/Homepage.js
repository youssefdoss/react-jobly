import { useContext } from "react";
import userContext from "./UserContext";


/** HomePage: renders home page with different message depending on logged
 * in status
 *
 * RoutesList -> HomePage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
  <div>
    <h1>Jobly</h1>
    <h3>All the jobs in one, convenient place</h3>
    {user && <p>Welcome back {user.username}!</p>}
  </div>
  );
}

export default Homepage;