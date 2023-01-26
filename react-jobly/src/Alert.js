/** Alert: Renders alert page for auth
 *
 * Props:
 * - messages: Array of messages to display
 *
 * { LoginForm, SignupForm } -> Alert
 */

function Alert({ messages }) {
  return (
    <div className="Alert">
      {messages.map(message => (
        <p key={message}>{message}</p>
      ))}
    </div>
  )
}

export default Alert;