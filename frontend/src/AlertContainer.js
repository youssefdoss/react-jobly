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
      {console.log("Alertcomp: ", alerts.messages)}
      <Alert key={"primary"} variant={"primary"}>Hello world</Alert>
      {/* {alerts.messages.map((message) => (
        <Alert key={message} variant={alerts.type}>
          {message}
        </Alert>
      ))} */}
    </>
  );
}

export default AlertContainer;
