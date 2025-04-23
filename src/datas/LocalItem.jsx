import React from 'react';
import { Link } from 'react-router';

function LocalItem({ ietem, handleDeletr }) {

   const { image, name, education, reg, id } = ietem;
   return (
      <>
         

         <div className="rounded-xl">
            <div className="p-8 bg-white shadow-2xl rounded-xl">


               <img className="mx-auto w-full" src='/image/Frame 8.png' alt="Doctor" />

               <div>

                  <div className="flex items-start gap-4 mt-6">
                     <button className="py-1 px-3 border text-[#09982F] bg-[#09982F]/24 border-gray-400 rounded-full">
                        Available
                     </button>
                     <button className="py-1 px-3 border text-[#176AE5] bg-[#176AE5]/24 border-gray-400 rounded-full">
                        5+ Years Experience
                     </button>
                  </div>


                  <div className="py-5 border-b border-dashed">
                     <h2 className="text-2xl font-extrabold">{name}</h2>
                     <p className="mt-2 text-gray-600 text-[18px] font-medium">
                        {education}
                     </p>
                  </div>

                  <p className="mt-5">{reg}</p>
                  <div className=" w-full mt-3">

               
                     <button onClick={() => handleDeletr(id)} className="w-full text-[20px] font-bold border border-[#176AE5] rounded-full py-3 px-5 text-[#176AE5] hover:bg-[#176AE5] hover:text-white">
                           detle
                        </button>
               
                  </div>
               </div>
            </div>
         </div>

      

         
         
      </>
   );
}

export default LocalItem;