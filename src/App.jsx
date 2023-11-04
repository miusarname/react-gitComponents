import './App.css'

function App() {
  return (
    <>
      <div>
      <div class="login-box">
      <img src="https://clay.com.co/wp-content/uploads/2020/03/clay-bioseguridad-logo-pop-up-300x122.png" class="avatar" alt="Avatar Image"/>
      <h1>Login Here</h1>
      <form action="">
      <label for="username">Username</label>
      <input type="text" placeholder="Enter Username"/>
      <label for="password">Password</label>
      <input type="password" placeholder="Enter Password"/>
      <input type="submit" value="Log In"/>
      <a href="#">Lost your Password?</a><br/>
      <a href="#">Don't have An account?</a>
      </form>
    </div>
      </div>
    </>
  )
}

export default App
