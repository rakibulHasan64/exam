import { Link } from "react-router";





function DotoreItem({ item }) {

   const { image, name, education, reg, id, experience } = item;
   return (
      <>
         
         <div className="rounded-xl">
            <div className="p-8 bg-white shadow-2xl rounded-xl">


               <img className="mx-auto w-full object-cover" src={image} alt="Doctor" />

               <div>

                  <div className="flex items-start gap-4 mt-6">
                     <button className="py-1 px-3 border text-[#09982F] bg-[#09982F]/24 border-gray-400 rounded-full">
                        Available
                     </button>
                     <button className="py-1 px-3 border text-[#176AE5] bg-[#176AE5]/24 border-gray-400 rounded-full">
                        {experience}
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
               
                     <Link to={`/detlis/${id}`}>
                        <button className="w-full text-[20px] font-bold border border-[#176AE5] rounded-full py-3 px-5 text-[#176AE5] hover:bg-[#176AE5] hover:text-white">
                           View Details
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         
      </>
   );
}

export default DotoreItem;