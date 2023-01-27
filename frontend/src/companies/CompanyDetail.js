import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import Container from "react-bootstrap/Container";

/** CompanyDetail: Renders page containing company info and jobs
 *
 * State:
 * - company: Current company object
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState();

  useEffect(function getCompanyByHandle() {
    async function getCompanyFromAPI() {
      const company = await JoblyApi.getCompany(handle)
      setCompany(company);
    }
    getCompanyFromAPI();
  }, [handle])
  if (company === undefined) return <LoadingSpinner />;

  return (
<Container
  className="col-10 col-sm-8 col-md-6 mt-3">
  <h2 style={{color: 'white'}}>{company.name} </h2>
    <div style={{color: 'white'}}>
      {company.description}
    </div>

    <JobCardList jobs={company.jobs} />

</Container>
  );
}

export default CompanyDetail;
