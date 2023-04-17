import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/dataContext";
const styleobj = {
  backgroundColor: "black",
  opacity: "0.8",
  padding: "1rem",
  marginBottom: "1rem"
};
const styleobject = {
  paddingRight: "1rem",
  color: "white"
};

export default function Header() {
  const { cartItem } = useContext(DataContext);
  return (
    <div>
      <nav style={styleobj}>
        <NavLink to="/" style={styleobject}>
          Home
        </NavLink>

        <NavLink to="/menu" style={styleobject}>
          Menu
        </NavLink>
        <NavLink to="/cart" style={styleobject}>
          Cart({cartItem.length})
        </NavLink>
      </nav>
    </div>
  );
}
