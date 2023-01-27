import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/card";

/** CompanyCard: renders individual company card
 *
 * Props:
 * - company: object of a company
 *
 * CompanyList -> CompanyCard
 */
function CompanyCard({ company }) {
  return (
    <Link style={{textDecoration: 'none', color: 'black'}} to={`/companies/${company.handle}`} className="CompanyCard">
      <div className="mt-3 row d-flex justify-content-center">
        <Card className="my-2">
          {company.logoUrl && (
            <Card.Img src={company.logoUrl} alt={`logo of ${company.name}`} />
          )}
          <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Text>{company.description}</Card.Text>

          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}

export default CompanyCard;
