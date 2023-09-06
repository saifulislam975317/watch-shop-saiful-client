import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleLogin().then((result) => {
      const user = result.user;
      navigate("/");
      console.log(user);
    });
  };
  return (
    <div className="p-4">
      <button
        onClick={handleGoogle}
        className="btn btn-circle btn-outline w-full "
      >
        <FcGoogle className="text-4xl"></FcGoogle> Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
