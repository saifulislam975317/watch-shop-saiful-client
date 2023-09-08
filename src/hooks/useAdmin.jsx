import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://watch-shop-saiful-server.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      const data = await res.json();
      return data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
