import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** RoutesList: Renders routes for the whole app
 *
 * Props:
 * - login: Function to login
 * - signup: Function to sign up
 * - applyToJob: Function to apply to a job
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 */
// TODO: Route intelligently based on logged in status
function RoutesList({ login, signup, applyToJob }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/companies" element={<CompanyList />}/>
      <Route path="/companies/:handle" element={<CompanyDetail />}/>
      <Route path="/jobs" element={<JobList />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/signup" element={<SignupForm />}/>
      <Route path="/profile" element={<ProfileForm />}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default RoutesList;