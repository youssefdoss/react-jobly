import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api/api";

/** CompanyList: Renders company list page
 *
 * State:
 * - companies: Array of company objects
 *
 * RoutesList -> CompanyList -> { SearchForm, CompanyCard }
 */
function CompanyList() {
  const [companies, setCompanies] = useState();

  useEffect(function getCompanies() {
    search();
  }, []);

  async function search(nameLike) {
    const companies = await JoblyApi.getCompanies(nameLike);
    setCompanies(companies);
  }

  if (companies === undefined) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      <SearchForm search={search} />
      {companies.length > 0
        ? (
          <ul>
            {companies.map(c => (
              <CompanyCard
                key={c.handle}
                company={c} />
            ))}
          </ul>
        ) : (
          <p>Sorry, no results were found!</p>
        )}
    </div>
  )
}

export default CompanyList;