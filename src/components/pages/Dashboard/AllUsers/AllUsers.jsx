import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is admin now.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you want to delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete him/her.",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${user.name} has been deleted`, "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center uppercase my-4">
        Total Users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr className="hover" key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost  bg-green-600 text-white"
                    >
                      Make Admin <FaUsers></FaUsers>
                    </button>
                  )}
                </th>
                <th>
                  {" "}
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
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

export default AllUsers;
