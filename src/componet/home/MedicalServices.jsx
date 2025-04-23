import CountUp from "react-countup";

function MedicalServices() {
   return (
      <div className="container mx-auto py-24">
         <h4 className="text-center text-[40px] font-extrabold">We Provide Best Medical Services</h4>
         <p className="mt-5 text-center text-[16px] font-semibold">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
         </p>

         <div className="mt-11 py-6">
            <div className="grid grid-cols-4 gap-6">

   
               <div className="bg-white shadow-2xl rounded-2xl">
                  <div className="p-5 py-5">
                     <div className="flex flex-col gap-3 items-start">
                        <img src="/image/fi_3160069.png" alt="" />
                        <h3 className="text-[64px] font-extrabold">
                           <CountUp end={199} duration={4} />+
                        </h3>
                        <p className="text-[24px] font-semibold text-gray-400">Total Doctors</p>
                     </div>
                  </div>
               </div>

      
               <div className="bg-white shadow-2xl rounded-2xl">
                  <div className="p-5 py-5">
                     <div className="flex flex-col gap-3 items-start">
                        <img src="/public/image/fi_7804340.png" alt="" />
                        <h3 className="text-[64px] font-extrabold">
                           <CountUp end={467} duration={4} />+
                        </h3>
                        <p className="text-[24px] font-semibold text-gray-400">Total Reviews</p>
                     </div>
                  </div>
               </div>

      
               <div className="bg-white shadow-2xl rounded-2xl">
                  <div className="p-5 py-5">
                     <div className="flex flex-col gap-3 items-start">
                        <img src="/image/fi_2854545.png" alt="" />
                        <h3 className="text-[64px] font-extrabold">
                           <CountUp end={1900} duration={4} />+
                        </h3>
                        <p className="text-[24px] font-semibold text-gray-400">Patients</p>
                     </div>
                  </div>
               </div>

         
               <div className="bg-white shadow-2xl rounded-2xl">
                  <div className="p-5 py-5">
                     <div className="flex flex-col gap-3 items-start">
                        <img src="/image/fi_3160069.png" alt="" />
                        <h3 className="text-[64px] font-extrabold">
                           <CountUp end={300} duration={4} />+
                        </h3>
                        <p className="text-[24px] font-semibold text-gray-400">Total Doctors</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default MedicalServices;
