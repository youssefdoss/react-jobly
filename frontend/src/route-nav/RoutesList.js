import { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import userContext from "../contexts/UserContext";

/** RoutesList: Renders routes for the whole app
 *
 * Props:
 * - login: Function to login
 * - signup: Function to sign up
 * - edit: Function to update a user
 *
 * JoblyApp -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList, Loginform, SignupForm,ProfileForm }
 */



 function RoutesList({ login, signup, edit }) {
  const { user } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {user && (
        <>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/profile" element={<ProfileForm edit={edit} />} />
        </>
      )}
      {!user && (
        <>
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
