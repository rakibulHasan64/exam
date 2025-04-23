import { Outlet } from "react-router";
import Naver from "./Naver";
import Footer from "./Footer";
import Golobal from "../home/Golobal";


function AllLouts() {
   return (
      <>
         <Golobal />
         <Naver />
         <Outlet />
         <Footer />
         
      </>
   );
}

export default AllLouts;