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
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(function updateLocalStorage() {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token])

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

  /** Edits a user's profile information and updates across the application
   *
   * data: {username, firstName, lastName, email}
   */
  async function edit(data, username) {
    const user = await JoblyApi.edit(data, username);
    setUser(prev => ({
      ...prev,
      data: user
    }));
  }

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
        edit={edit}
      />
    </userContext.Provider>
  )
}

export default JoblyApp;