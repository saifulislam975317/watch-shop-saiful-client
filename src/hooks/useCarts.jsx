import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useCarts = () => {
  const { user } = useContext(AuthContext);
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
