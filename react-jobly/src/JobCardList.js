import JobCard from "./JobCard";
import React from 'react'

/** Renders list of Jobcards
 *
 * Props:
 * - jobs: array of job objects
 *
 *
 *  {CompanyDetail, Joblist} -> JobCardList -> JobCard
 */

function JobCardList({jobs}) {

  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          />
      ))}
    </div>
  )
}

export default JobCardList