/** Alert: Renders alert page for auth
 *
 * Props:
 * - errors: Array of errors to display
 *
 * { LoginForm, SignupForm } -> Alert
 */

function Alert({ errors }) {
  return (
    <div className="Alert">
      {errors.map(error => (
        <p key={error}>{error}</p>
      ))}
    </div>
  )
}

export default Alert;