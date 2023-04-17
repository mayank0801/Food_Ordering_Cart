import FoodCard from "../Component/FoodCard";
import { fakeFetch } from "../Api/fakeFetch";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "..";
const styleobj = {
  display: "inline-block",
  margin: "1rem",
  border: "1px solid black",
  padding: "1rem"
};

export default function Menu() {
  const { addCartItem } = useContext(DataContext);
  const [menuList, setMenuList] = useState(null);
  const getMenu = async () => {
    try {
      const {
        data: { menu }
      } = await fakeFetch("https://example.com/api/menu");
      setMenuList(menu);
    } catch (E) {
      console.log(E);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  // console.log(menuList, "menulist");

  return (
    <div>
      {menuList &&
        menuList.map((item) => (
          <article style={styleobj}>
            <FoodCard item={item} />
            <button onClick={() => addCartItem(item)}>Add To Cart</button>
          </article>
        ))}
      {/* <h2>Menu Page{count}</h2> */}
    </div>
  );
}
