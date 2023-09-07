import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCarts from "../../../../hooks/useCarts";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
  const [carts, refetch] = useCarts();
  const total = carts?.reduce((sum, item) => sum + item.price, 0);
  const price = parseInt(Math.round(total));
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          refetch={refetch}
          carts={carts}
          price={price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
