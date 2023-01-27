import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./api/api";
import CompanyCardList from "./CompanyCardList";
import LoadingSpinner from "./LoadingSpinner";
import Container from 'react-bootstrap/Container';

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
    if (nameLike !== undefined) {
      nameLike = nameLike.trim();
    }
    if (nameLike === '') {
      nameLike = undefined
    }
    const companies = await JoblyApi.getCompanies(nameLike);
    setCompanies(companies);
  }

  if (companies === undefined) return <LoadingSpinner />;

  return (
    <Container className="col-10 col-sm-8 col-md-6">
      <SearchForm search={search} />
      {companies.length > 0
        ? (
          <CompanyCardList companies={companies} />
        ) : (
          <p>Sorry, no results were found!</p>
        )}
    </Container>
  )
}

export default CompanyList;