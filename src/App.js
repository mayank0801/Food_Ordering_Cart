import Header from "./Pages/Header";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Menu from "./Pages/MenuPage";
import Cart from "./Pages/CartPage";
import ErrorPage from "./Pages/ErrorPage";
export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}
