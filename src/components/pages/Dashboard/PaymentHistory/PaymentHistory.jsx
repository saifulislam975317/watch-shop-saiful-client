import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: items = [] } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payment/history/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item._id} className="hover">
                <th>{i + 1}</th>
                <td>{user?.displayName}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
