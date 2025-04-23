import { Link } from "react-router";



function EmptyStatt() {
   return (
      <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
               <h3 className="text-3xl font-bold text-gray-700 mb-4">You Have not Booked any appointment yet</h3>
               <p className="text-gray-500 mb-4">Sorry, we couldn't find any data. Please try again later.</p>
               <Link to={"/"}>
                  <button
                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                     Book an Appointment
                  </button>
               </Link>
            </div>
         </div>
         
      </>
   );
}

export default EmptyStatt;