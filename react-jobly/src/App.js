import './App.css';
import { BrowserRouter } from "react-router-dom";
import JoblyApp from "./JoblyApp";

/** App: Renders jobly app
 *
 * App -> { Navigation, RoutesList }
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <JoblyApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
