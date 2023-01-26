import { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./UserContext";

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
        {/* TODO: ask why long briefely flashes before being redirected to homepage  */}
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
