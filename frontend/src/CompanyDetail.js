import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";

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
    <div className="CompanyDetail">
      <h2>{company.name} </h2>
      <div>
        {company.description}
      </div>

      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
