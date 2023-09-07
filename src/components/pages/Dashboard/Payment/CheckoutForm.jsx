import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import "./css/CheckoutFormCss.css";

const CheckoutForm = ({ refetch, carts, price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setProcessing(true);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentData = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: carts.length,
        date: new Date(),
        productsName: carts.map((cart) => cart.name),
        productItems: carts.map((cart) => cart.productId),
        cartItems: carts.map((cart) => cart._id),
        status: "pending",
      };
      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          if (
            data.insertedResult.insertedId ||
            data.deletedResult.deletedCount > 0
          ) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "success.Your payment completed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <>
      <form className="w-2/4 p-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info -mt-2 ml-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8 -mt-4">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 ml-8 -mt-4">Your TnxId: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
