import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCarts();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBuyNow = (item) => {
    const { _id, name, image, price, details } = item;
    const newItem = {
      name,
      email: user?.email,
      image,
      price,
      details,
      productId: _id,
    };
    if (user && user.email) {
      fetch("https://watch-shop-saiful-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",

              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/myCart");
          }
        });
    } else {
      Swal.fire({
        title: "without login, you can't order",
        text: "You have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Thank you!");
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Product details </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img src={product.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Name: {product.name}</h1>
            <p className="text-lg text-orange-500">Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.details}</p>
            <button
              onClick={() => handleBuyNow(product)}
              className="btn btn-success"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
