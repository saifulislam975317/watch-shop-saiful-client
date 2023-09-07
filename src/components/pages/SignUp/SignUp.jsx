import { useForm } from "react-hook-form";
import signUpImg from "../../../assets/signUpLogin/signup.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password).then((userInfo) => {
      const user = userInfo.user;
      updateUserProfile(data.name).then(() => {
        const saveUser = { name: data.name, email: data.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      });
      console.log(user);
    });
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col gap-24 p-4 my-4 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-4">SignUp </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password should be at least 6 characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message:
                      "Password must be Uppercase,lowercase, special characters, and numbers ",
                  },
                })}
                placeholder="Enter password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-info" type="submit" value="singUp" />
            </div>
          </form>
          <p className="text-center">
            Already have an account?
            <Link className="text-green-500 ml-2" to="/login">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
