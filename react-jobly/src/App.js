import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from './RoutesList';

/** App: Renders jobly app
 *
 * App -> { Navigation, RoutesList }
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
