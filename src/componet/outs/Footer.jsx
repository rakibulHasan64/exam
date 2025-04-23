import { NavLink } from "react-router";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer() {
   
   return (
      <>
         
         <footer className="bg-[#ffff] ">
            <div className="container mx-auto py-14">
               <div className="flex flex-col items-center gap-7 mt-5">
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

                  <div className="py-6">
                     <ul className="flex items-center justify-center gap-6">
                        
                        <li>
                           <a
                              href="https://web.facebook.com/?_rdc=1&_rdr#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl text-blue-600 hover:text-blue-800 transition"
                           >
                              <FaFacebookF />
                           </a>
                        </li>

         
                        <li>
                           <a
                              href="https://github.com/rakibulHasan64"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl text-gray-800 hover:text-black transition"
                           >
                              <FaGithub />
                           </a>
                        </li>

                     
                        <li>
                           <a
                              href="https://www.linkedin.com/feed/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl text-blue-700 hover:text-blue-900 transition"
                           >
                              <FaLinkedinIn />
                           </a>
                        </li>

               
                        <li>
                           <a
                              href="https://youtube.com/yourChannel"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl text-red-600 hover:text-red-800 transition"
                           >
                              <FaYoutube />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

         </footer>
         
      </>
   );
}

export default Footer;