import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin = [] } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const data = await res.json();
      return data.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
