

function Banner() {
   return (
      <>
         

         <div className="container mx-auto  py-19 shadow-2xl  rounded-2xl border-2 border-[#ffff]">

            <div className="text-center flex flex-col gap-7">
               <h3 className="text-[48px] font-Playfair font-bold">Dependable Care, Backed by Trusteds <br />Professionals.</h3>

               <p className="text-[16px] font-medium font-Playfair">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

               <div className="flex items-center justify-center gap-5">

                  <input className="py-3 px-6 focus:none w-1/2 border rounded-full " type="text" placeholder="Search any doctor..." />
                  <button className="text-[20px] font-bold rounded-full py-3 px-5 bg-[#176AE5] text-white">Emergency</button>

               </div>

               <div className="flex items-center justify-center gap-4 p-7">
                  <img className="w-[578px] h-auto" src="/image/Frame 8.png" alt="" />
                  <img className="w-[578px] h-auto" src="/image/Frame 8.png" alt="" />
               </div>
            </div>
         </div>
         

         
      </>
   );
}

export default Banner;