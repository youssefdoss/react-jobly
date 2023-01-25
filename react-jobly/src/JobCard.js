/** JobCard: Renders a job card
 *
 * Props:
 * - showCompany: Boolean about whether or not company name is shown
 * - job: Job object
 *
 * JobCardList -> JobCard
 */

function JobCard({ showCompany, job }) {
  return (
    <div className="JobCard">
      <div><p><b>{job.title}</b></p></div>
      <div><p>{showCompany && job.companyName}</p></div>
      <div><p>Salary: {job.salary}</p></div>
      <div><p>Equity: {job.equity}</p></div>
    </div>
  )
}

export default JobCard;