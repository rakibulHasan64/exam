import { useNavigate } from "react-router-dom";
import Naver from "../componet/outs/Naver";

function ErrorPage() {
   const navigate = useNavigate();

   return (

      <>
         <Naver />
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
               <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
               <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
               <p className="text-gray-500 mb-4">Oops! The page you're looking for doesn't exist.</p>

               <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
               >
                  Go Back
               </button>
            </div>
         </div>
      </>
   );
}

export default ErrorPage;
