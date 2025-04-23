import { NavLink } from "react-router";


function Naver() {
   return (
      <>
         
         <div className="container mx-auto py-4 font-Playfair font-bold">
            

            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <img src="/image/Vector.png" alt="" />
                  <h3 className="text-3xl font-Playfair font-bold">Phudu</h3>
               </div>

               <div className="">
                  <ul className="flex items-center gap-10 text-[18px] font-bold font-Playfair text-[#0F0F0F]">
                     
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           isActive ? "text-red-500" : "text-black"
                        }
                     >
                        Home
                     </NavLink>

                     <NavLink
                        to="/data"
                        className={({ isActive }) =>
                           isActive ? "text-red-500" : "text-black"
                        }
                     >
                        My-Bookings
                     </NavLink>

                     <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                           isActive ? "text-red-500" : "text-black"
                        }
                     >
                        Blogs
                     </NavLink>

                     <NavLink
                        to="/hgte"
                        className={({ isActive }) =>
                           isActive ? "text-red-500" : "text-black"
                        }
                     >
                        Contact Us
                     </NavLink>

                     
                     
                  </ul>
               </div>

               <button className="text-[20px] font-bold rounded-full py-3 px-5 bg-[#176AE5] text-white">Emergency</button>
            </div>

         
         </div>
      
      
      </>
         
      
   );
}

export default Naver;