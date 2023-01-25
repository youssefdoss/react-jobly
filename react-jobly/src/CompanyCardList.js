import CompanyCard from "./CompanyCard";

/** CompanyCardList: Renders list of company cards
 *
 * Props:
 * - companies
 *
 * CompanyList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList({ companies }) {
  return (
    <div>
      {companies.map(company => (
        <CompanyCard
          key={company.id}
          company={company}
          />
      ))}
    </div>
  )
}

export default CompanyCardList;