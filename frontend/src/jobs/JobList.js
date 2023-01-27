import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import Container from 'react-bootstrap/Container';
import AlertContainer from "../common/AlertContainer";

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
    if (title !== undefined) {
      title = title.trim();
    }

    if (title === '') {
      title = undefined;
    }
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (jobs === undefined) return <LoadingSpinner />;

  return (
    <Container className="col-10 col-sm-8 col-md-6">
      <SearchForm search={search} />
      {jobs.length > 0
        ? <JobCardList jobs={jobs} showCompany={true} />
        : <AlertContainer alerts={{
          messages: ['Sorry, no results found!'],
          type: 'danger'
      }}/> }
    </Container>
  )
}

export default JobList;