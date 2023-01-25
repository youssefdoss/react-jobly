import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api/api";
import JobCardList from "./JobCardList";

/** TODO: Upon fleshing out (just wanted filler components) */
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState();


  useEffect(function getCompanyByHandle() {
    async function getCompanyFromAPI(handle) {
      const company = await JoblyApi.getCompany(handle)
      setCompany(company);
    }
    getCompanyFromAPI(handle);
  }, [])

  if (company === undefined) return <h1>Loading...</h1>


  return (
  <div className="CompanyDetail">
    <h2>{company.name} </h2>
    <div>
      {company.description}
    </div>

    <JobCardList jobs={company.jobs} />
  </div>)
}

export default CompanyDetail;
