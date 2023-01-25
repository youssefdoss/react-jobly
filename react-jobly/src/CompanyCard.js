import React from "react";
import { Link } from "react-router-dom";
import "../public/logos";

const NUMBER_OF_LOGOS = 4;

/** CompanyCard: renders individual company card
 *
 * Props:
 * - company: object of a company
 *
 * CompanyList -> CompanyCard
 */
function CompanyCard({ company }) {

  /** returns random number between 1-NUMBER_OF_LOGOS */
  function getRandom() {
    return Math.ceil(Math.random() * NUMBER_OF_LOGOS);
  }

  return (
    <Link to={`/companies/${company.handle}`} className="CompanyCard">
      <div className="CompanyCard-name">{company.name}</div>

      <div className="CompanyCard-description">{company.description}</div>

      <div className="CompanyCard-logo">
        <img
          src={`./logos/logo${getRandom()}.png`}
          alt={`logo of ${company.name}`}
        />
      </div>
    </Link>
  );
}

export default CompanyCard;
