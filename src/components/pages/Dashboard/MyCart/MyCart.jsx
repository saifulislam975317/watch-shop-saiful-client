import Swal from "sweetalert2";
import useCarts from "../../../../hooks/useCarts";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [carts, refetch] = useCarts();
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const total = Math.round(totalPrice);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you want to delete ${item.name}?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${item.name} has been deleted`, "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full px-4">
      <div className="flex items-center uppercase justify-evenly">
        <h1>Total orders: {carts.length}</h1>
        <h2>Total price:${total}</h2>
        {carts.length > 0 ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm">pay</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <BsFillTrashFill className="text-3xl "></BsFillTrashFill>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
