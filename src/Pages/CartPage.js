import { useContext, useState } from "react";
import FoodCard from "../Component/FoodCard";
import { DataContext } from "../context/dataContext";

export default function Cart() {
  const { cartItem } = useContext(DataContext);
  const [isCoupon, setCoupon] = useState(false);
  const finalPrice =
    cartItem.reduce((acc, { price }) => acc + price, 0) - (isCoupon ? 5 : 0);
  const totalTime = cartItem.reduce(
    (acc, { delivery_time }) => acc + delivery_time,
    0
  );
  function handleCoupon() {
    setCoupon(!isCoupon);
  }
  return (
    <div>
      <div>
        <h2>Cart Items: {cartItem.length} </h2>
        <h3>
          Delivery Time: {totalTime}
          Minutes
        </h3>
        <h3>Total Price:{finalPrice}</h3>

        <button onClick={() => handleCoupon()}>Apply Coupoun</button>
      </div>
      {cartItem.map((item) => (
        <article
          style={{
            display: "inline-block",
            margin: "1rem",
            padding: "0.85rem",
            border: "solid black"
          }}
        >
          <FoodCard item={item} />
        </article>
      ))}
    </div>
  );
}
