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
  });
  const [token, setToken] = useState(null);

  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      // Will be helpful when we add localStorage functionality
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
    // TODO: Are the following four lines unnecessary?
    // setUser({
    //   data: null,
    //   isLoading: false,
    // });
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