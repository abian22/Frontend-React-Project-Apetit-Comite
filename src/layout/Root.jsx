import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Root.css"

export default function Root() {
  return (
    <div className="Fondo">
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
