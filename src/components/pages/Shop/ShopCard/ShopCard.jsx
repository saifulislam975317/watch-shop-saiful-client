import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import useCarts from "../../../../hooks/useCarts";
import { useLocation, useNavigate } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { name, image, price, details } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCarts();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
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
      fetch("http://localhost:5000/carts", {
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
              title: `${item.name} is add to cart successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
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
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className=" pt-2 px-4">
          <img
            src={image}
            alt="watches"
            className="rounded-xl w-[300px] h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <h3 className="text-orange-500 font-bold ">Price ${price}</h3>
          <div className="card-actions ">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-success "
            >
              <FaCartPlus className="text-2xl "></FaCartPlus>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
