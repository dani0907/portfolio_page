import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import './css/layout.css';

function Layout(){
  return(
  <>
    <Header></Header>
    <div className="mainContainer">
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </>
  )
}

export default Layout;