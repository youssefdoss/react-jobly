import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api/api";
import LoadingSpinner from "./LoadingSpinner";

/** JobList: Renders list of all jobs page
 *
 * State:
 * - jobs: Array of job objects
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }
 */
function JobList() {
  const [jobs, setJobs] = useState();

  useEffect(function getAllJobs() {
    search();
  }, []);

  /** Sets jobs on search form submission */
  async function search(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (jobs === undefined) return <LoadingSpinner />;

  return (
    <div className="JobList">
      <SearchForm search={search} />
      {jobs.length > 0
        ? <JobCardList jobs={jobs} />
        : <p>Sorry, no results were found!</p>}
    </div>
  )
}

export default JobList;