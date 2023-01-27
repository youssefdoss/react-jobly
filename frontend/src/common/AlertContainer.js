import Alert from "react-bootstrap/Alert";

/** Alert: Renders alert page for auth
 *
 * Props:
 * - alerts: Array of alert objects to display
 *
 * { LoginForm, SignupForm, ProfileForm } -> Alert
 */

function AlertContainer({ alerts }) {
  return (
    <>
      {alerts.messages.map((message) => (
        <Alert className="my-3" key={message} variant={alerts.type}>
          {message}
        </Alert>
      ))}
    </>
  );
}

export default AlertContainer;
