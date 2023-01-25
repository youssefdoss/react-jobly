import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle.
   *
   * handle: string
   *
   * returns: company object
   */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get an array of all companies with optional name filter
   *
   * nameLike: string
   *
   * returns: Array of companies
   */

  static async getCompanies(nameLike) {
    let res = await this.request('companies', { nameLike });
    return res.companies;
  }

  /** Get an array of all jobs with optional title filter
   *
   * title: string
   *
   * returns: Array of jobs
   */

  static async getJobs(title) {
    let res = await this.request('jobs', { title });
    return res.jobs;
  }

  /** Login user
   *
   * data: object - user data {username, password}
   *
   * returns: string - token
   */

  static async login(data) {
    let res = await this.request('auth/token', data, 'post');
    return res.token
  }
  /** Signup user
   *
   * data: object - user data {username, password, firstName, lastName, email}
   *
   * returns: string - token
   */

  static async signup(data) {
    let res = await this.request('auth/register', data, 'post');
    return res.token
  }

  /** Edit user
   *
   * data: object - user data {username, password, firstName, lastName, email}
   *
   * returns: string - token
   */

  static async edit(data) {
    let res = await this.request(`users/${data.username}`, data, 'post');
    return res.user
  }

  /** Apply to a job
   *
   * data: object - user data {username, password, firstName, lastName, email}
   *
   * returns: string - token
   */

  static async apply(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
  }

  /** Get current user
   *
   * username: string
   *
   * returns: object - user object
   */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;