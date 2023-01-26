import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import LoadingSpinner from "./LoadingSpinner";
import JoblyApi from "./api/api";
import userContext from "./UserContext";
import decode from "jwt-decode";

/** JoblyApp: Manages state and context of jobly app
 *
 * State:
 * - user: User object {data, isLoading} (used in context)
 * - token: String
 *
 * JoblyApp -> { Navigation, RoutesList }
 */
function JoblyApp() {
  const [user, setUser] = useState({
    data: null,
    isLoading: true,
    // TODO: Add back in errors and display(?) them in the catch
  });
  const [token, setToken] = useState(null);

  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      if (token) {
        try {
          const { username } = decode(token);
          JoblyApi.token = token;
          const user = await JoblyApi.getUser(username);
          setUser({
            data: user,
            isLoading: false,
          });
        } catch (err) {
          // When we try to login when the server is off (simulating
          // a server error), the error doesn't get here because it's thrown
          // in the api method. Is that appropriate?
          setUser({
            data: null,
            isLoading: false,
          });
        }
      } else {
        setUser({
          user: null,
          isLoading: false,
        });
      }
    }
    fetchUser();
  }, [token]);

  /** Logs user out of application */
  function logout() {
    setToken(null);
  }

  /** Logs user into application
   *
   * data: {username, password}
   */
  async function login(data) {
    const token = await JoblyApi.login(data);
    setToken(token);
  }

  /** Signs user up for application and logs in
   *
   * data: {username, password, firstName, lastName, email}
   */
  async function signup(data) {
    const token = await JoblyApi.signup(data);
    setToken(token);
  }
  // TODO: Make an edit function
  // TODO: Add application functionality if time
  // function applyToJob(jobId) {
  //   JoblyApi.apply(user.username, jobId);
  // }

  if (user.isLoading) return <LoadingSpinner />

  return (
    <userContext.Provider value={{ user: user.data, /* applyToJob */ }} >
      {console.log(user)}
      <Navigation logout={logout} />
      <RoutesList
        login={login}
        signup={signup}
      />
    </userContext.Provider>
  )
}

export default JoblyApp;