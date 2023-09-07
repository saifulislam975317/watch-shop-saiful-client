import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/watchData");
      const data = await res.json();
      return data;
    },
  });
  return [products, refetch];
};

export default useProducts;
