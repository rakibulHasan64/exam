import { useLoaderData } from "react-router";
import Banner from "../home/Banner";
import OurBastDoctore from "../home/OurBastDoctore";
import MedicalServices from "../home/MedicalServices";
import { Loadinge } from "../home/Loadinge";
import Golobal from "../home/Golobal";


function AllHomeLayout() {
   const data = useLoaderData();

   if (!data) {
      return <Loadinge />;
   }


   return (
      <>
         <Golobal />
         <Banner />
         <OurBastDoctore data={data} />
         <MedicalServices />
         
      </>
   );
}

export default AllHomeLayout;