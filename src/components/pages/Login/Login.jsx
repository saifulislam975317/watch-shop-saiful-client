import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import loginImg from "../../../assets/signUpLogin/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const { logIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((loggedInUser) => {
        const user = loggedInUser.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col gap-24 p-24 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login </h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter password"
                className="input input-bordered"
                required
              />
              {error && (
                <span className="text-red-500">Invalid email or password</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-info" type="submit" value="login" />
            </div>
          </form>
          <p className="text-center">
            Don't have an account?
            <Link className="text-green-500 ml-2" to="/signUp">
              Sign up
            </Link>
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
