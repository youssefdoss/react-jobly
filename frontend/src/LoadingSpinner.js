import Spinner from "react-bootstrap/Spinner";

/** LoadingSpinner: Renders loading spinner */
function LoadingSpinner() {
  return (
    <div className="my-5 row d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status"
        style={{ width: "10rem", height: "10rem"}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
