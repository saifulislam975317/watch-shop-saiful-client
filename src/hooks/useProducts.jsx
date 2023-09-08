import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://watch-shop-saiful-server.vercel.app/watchData"
      );
      const data = await res.json();
      return data;
    },
  });
  return [products, refetch, isLoading];
};

export default useProducts;
