import { useState } from "react";
import DotoreItem from "./DotoreItem";
import { Loadinge } from "./Loadinge";
import Golobal from "./Golobal";


function OurBastDoctore({ data }) {
   
   const [datas, setDatas] = useState(data.slice(0, 6));

   const hanler = () => {
      const nextLength = datas.length + 6;
      const newData = data.slice(0, nextLength);
      setDatas(newData);
   };


   if (datas.length ===0) {
      return <Loadinge />
   }

   
   

   return (
      <>
      
         <div className="container mx-auto py-14">
            <h3 className="text-center text-[40px] font-extrabold">Our Best Doctors</h3>

            <p className="text-[16px] font-medium text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-9">

               {
                  datas.map(item => <DotoreItem key={item.id} item={item} />)
               }
         
            </div>

            <div className="text-center">
               <button
                  onClick={hanler}
                  disabled={datas.length >= data.length}
                  className={`mt-8 text-[20px] font-bold border border-[#176AE5] rounded-full py-3 px-5 text-[#176AE5] hover:bg-[#176AE5] hover:text-white ${datas.length >= data.length ? "opacity-50 cursor-not-allowed" : ""
                     }`}
               >
                  {datas.length >= data.length ? "No  Doctors" : "View All Doctors"}
               </button>
            </div>


         </div>

      </>
   );
}

export default OurBastDoctore;