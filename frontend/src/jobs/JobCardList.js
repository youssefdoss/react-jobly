import JobCard from "./JobCard";
import React from 'react'

/** Renders list of Jobcards
 *
 * Props:
 * - jobs: array of job objects
 * - showCompany: Boolean to determine if jobCard
 * should include company name
 *
 *
 *  {CompanyDetail, Joblist} -> JobCardList -> JobCard
 */

function JobCardList({jobs, showCompany}) {

  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          showCompany={showCompany}
          />
      ))}
    </div>
  )
}

export default JobCardList