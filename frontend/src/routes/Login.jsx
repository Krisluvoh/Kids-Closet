import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"

export default function Login() {
  return (
    <div id="auth">
        <div className="login-container">
            <h3>Log in</h3>
            <LoginForm />
        </div>
        <div className="signup container">
            <h3>Sign up</h3>
            <SignupForm />
        </div>
    </div>
  )
}