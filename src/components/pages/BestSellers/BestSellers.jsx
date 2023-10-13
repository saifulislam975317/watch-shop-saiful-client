import { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products] = useProducts();
  const [displayData, setDisplayData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayData(products.slice(3, 9));
    } else {
      setDisplayData(products.slice(3, 6));
    }
  }, [products, showAll]);

  return (
    <div>
      <h1 className="font-bold text-3xl my-12 text-center">Our Best Sellers</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {displayData.map((product) => (
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
              <p className=" text-xl text-orange-600">
                Price: ${product.price}
              </p>
              <div className="card-actions">
                <Link to={`/details/${product._id}`}>
                  <button className="text-slate-600 px-2 rounded-md text-xl hover:text-green-400 border-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-warning mt-5"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default BestSellers;
