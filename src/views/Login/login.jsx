import './login.css'

export default function App() {
  return (
    <>
      <div>
      <div class="login-box">
      <img src="https://clay.com.co/wp-content/uploads/2020/03/clay-bioseguridad-logo-pop-up-300x122.png" class="avatar" alt="Avatar Image"/>
      <h1>Login Here</h1>
      <form action="">
      <label for="username">Username</label>
      <input type="text" />
      <label for="password">Password</label>
      <input type="password"/>
      <input type="submit" value="Log In"/>
      </form>
    </div>
      </div>
    </>
  )
}