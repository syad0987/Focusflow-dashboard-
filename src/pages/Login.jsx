const Login = () => {
  return (
    <div class="container grid place-content-center h-screens bg-red-500">
      <h1 className="text-center text-blue-500">Login</h1>
      <form
        action=""
        className="text-blue-500
        
      "
      >
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email or username" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="enter password" />
        <h2>Remember me</h2>
        <h4>Forget password?</h4>
        <button type="button" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
