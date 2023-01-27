import Card from 'react-bootstrap/card';

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
    <div className="mt-3 row d-flex justify-content-center">
      <Card className="my-2">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          {showCompany && <Card.Text>{job.companyName}</Card.Text>}
          {job.salary && <Card.Text>Salary: {job.salary}</Card.Text>}
          {job.equity && <Card.Text>Equity: {job.equity}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;