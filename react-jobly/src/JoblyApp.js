import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import LoadingSpinner from "./LoadingSpinner";
import JoblyApi from "./api/api";
import userContext from "./UserContext";
import decode from "jwt-decode";

/** TODO: */
function JoblyApp() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(function loadUser() {
    async function getUser() {
      if (token) {
        const { username } = decode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(username);
        setUser(user);
      } else {
        setUser(null);
      }
    }
    getUser();
  }, [token]);

  /** Logs user out of application */
  function logout() {
    setUser(null);
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

  function applyToJob(jobId) {
    JoblyApi.apply(user.username, jobId);
  }

  if (user === undefined) return <LoadingSpinner />;

  return (
    <userContext.Provider value={{ user }} >
      <Navigation logout={logout} />
      <RoutesList
        login={login}
        signup={signup}
        applyToJob={applyToJob}
      />
    </userContext.Provider>
  )
}

export default JoblyApp;