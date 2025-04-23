import { useLoaderData, useNavigate, useParams } from "react-router";
import { addData } from "../ulitis";
import { toast } from "react-toastify";
import { Loadinge } from "./Loadinge";
import EmptyStatt from "./EmptyStatt";


function DetailsPage() {
   const navigate = useNavigate();
   const { id } = useParams();
   const data = useLoaderData();

   const doctor = data.find((doc) => doc.id === parseInt(id));

   if (!doctor) {
      navigate('/404');  
      return null;
   }


   
   const { image, name, education, reg, speciality, workplace, fee, designation } = doctor;
   const today = new Date().toLocaleString('en-US', { weekday: 'long' });
   const availableToday = doctor.availability.includes(today);


   const handeAdd = () => {
      const isAdded = addData(doctor);

      if (isAdded) {
         toast.success("Added successfully!");
         navigate("/data"); 
      } else {
         toast.error("Already added!");
      }
   };


    

   return (
      <>
         <div className="container mx-auto   ">

            <div className=" py-20 rounded-2xl bg-[#FFFFFF]">
               <h3 className="text-[48px] font-Playfair font-bold text-center">Doctor’s Profile Details</h3>
               <p className="text-[16px] font-medium font-Playfair text-center mt-3">Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus<br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            

            <div className="flex justify-center gap-9 py-20 bg-[#FFFFFF] mt-5 rounded-2xl">

               <img className="w-[369px] h-[383px] object-cover" src={image} alt="" />

               <div className="">

                  <h3 className="text-[32px] font-semibold">{name}</h3>
                  <p className="text-[18px] text-gray-500 py-2">{education}</p>
                  <p className="text-[18px] text-gray-500">{speciality}</p>
                  <p className="text-[18px] text-gray-500">{designation}</p>
                  <p className="text-[18px] text-gray-500">Working at</p>
                  <p className="text-[22px] text-black font-bold">  {workplace}</p>

                  <p className="text-[18px] text-gray-500">{reg}</p>
                  <p className="mt-4 border-b border-dashed"></p>

                  <h3 className="text-2xl font-extrabold mb-4">Availability</h3>
                  <ul className="flex items-center  gap-3">
                     {doctor.availability.map((day, index) => (
                        <li key={index} className="py-1 px-3 bg-[#09982F]/24 text-[#09982F] border border-gray-400 rounded-full mb-2">
                           {day}
                        </li>
                     ))}
                  </ul>

                  <div className="flex items-center justify-start gap-4">
                     <h2 className="text-2xl font-semibold">Consultation Fee:</h2>
         
                     <p><span className="text-base text-[#176AE5]">Taka</span> {fee}</p>
                     <p >(incl. VAT) <span className="text-base text-[#176AE5]">Per consultation </span></p>
                  
                  </div>


               </div>

            </div>


            <div className=" py-20 mb-7 rounded-2xl bg-white px-8 mt-5">
               <h3 className="font-extrabold text-2xl text-center border-b border-dashed py-4">Book an Appointment</h3>

               
               <div className="flex items-center justify-between  border-b border-gray-300 py-4">
                  <h2 className=" text-2xl font-bold">Availability</h2>

                  <button className="py-1 px-3 border text-[#176AE5] bg-[#176AE5]/24 border-gray-400 rounded-full">
                     {availableToday ? "Doctor Available Today" : "Unavailable Today"}
                  </button>

               </div>


               <div className="flex flex-col items-center justify-center">
                  <button className="mt-11 mx-auto py-1 px-3 bg-[#FFA000]/24 text-[#FFA000] border  rounded-full mb-2">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>


                  <button onClick={handeAdd} className="w-full mt-11 mx-auto py-4 px-3 bg-[#176AE5] text-white text-xl  rounded-full mb-2">Book Appointment Now</button>
               </div>
            </div>

            

            

         </div>
         
      </>
   );
}

export default DetailsPage;


