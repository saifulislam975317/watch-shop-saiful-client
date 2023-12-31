import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleLogin().then((result) => {
      const user = result.user;
      const saveUser = { name: user.displayName, email: user.email };
      fetch("https://watch-shop-saiful-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId || !data.insertedId) {
            navigate(from, { replace: true });
          }
        });
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
