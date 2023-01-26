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



  // split useeffect to update current user based on token
  // check if localstorage.token exists on mount,
  //    if yes, set token to that
  //    no else case: token will still be null. page will be rendered with no user

  // then upon login, tokenState changes. set localstorage to match token
  // if localstorageitem to value
  // else remove localstorage key


  // update local storage based on wheter we have a token.


  // refactor to updaet and check localstorage.
  // if token null, dont try it.
  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      if (token || localStorage.token) {
        setToken(localStorage.token); // can use .getItem()
        try {
          const { username } = decode(token);
          JoblyApi.token = token;
          const user = await JoblyApi.getUser(username);
          setUser({
            data: user,
            isLoading: false,
          });
        } catch (err) {
          resetUser();
        }
      } else {
        resetUser();
      }
    }
    fetchUser();
  }, [token]);

  /** Resets user to an initial state */
  function resetUser() {
    setUser({
      data: null,
      isLoading: false,
    });
  }

  /** Logs user out of application */
  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  /** Logs user into application
   *
   * data: {username, password}
   */
  async function login(data) {
    const token = await JoblyApi.login(data);
    setToken(token);
    localStorage.setItem("token", token);
  }

  /** Signs user up for application and logs in
   *
   * data: {username, password, firstName, lastName, email}
   */
  async function signup(data) {
    const token = await JoblyApi.signup(data);
    setToken(token);
    localStorage.setItem("token", token);
  }
  // TODO: Make an edit function
  // TODO: Add application functionality if time
  // function applyToJob(jobId) {
  //   JoblyApi.apply(user.username, jobId);
  // }

  if (user.isLoading) return <LoadingSpinner />

  return (
    <userContext.Provider value={{ user: user.data, /* applyToJob */ }} >
      <Navigation logout={logout} />
      <RoutesList
        login={login}
        signup={signup}
      />
    </userContext.Provider>
  )
}

export default JoblyApp;