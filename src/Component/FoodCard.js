export default function FoodCard({
  item: {
    id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time
  }
}) {
  // console.log(menuItem);
  return (
    <div>
      <img src={image} height="200px" width="200px" alt="FoodImage" />
      <p>Name:{name}</p>
      {/* <p style>
        <strong>Description:</strong>
        {description}
        </p> */}
      <p>Price:{price}</p>
      <p>Delivery Time:{delivery_time}</p>
    </div>
  );
}
