import useProducts from "../../../hooks/useProducts";

const BestSellers = () => {
  const [products] = useProducts();

  return (
    <div>
      <h1 className="text-bold text-2xl">Our Best Sellers</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products.slice(0, 6).map((product) => (
          <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt="Shoes"
                className="rounded-xl w-full h-[300px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>

              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
