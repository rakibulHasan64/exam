

import { useEffect, useState } from "react";
import { getData, removeData } from "../componet/ulitis";
import LocalItem from "./LocalItem";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   BarChart,
   Bar,
   Cell,
} from "recharts";
import EmptyStatt from "../componet/home/EmptyStatt";
import { toast } from "react-toastify";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
   const { fill, x, y, width, height } = props;
   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function LocalData() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const savedDoctors = getData();
      setData(savedDoctors);
   }, []);

   if (data.length < 1) return <EmptyStatt />;

   const handleDelete = (id) => {
      removeData(id);
      setData(getData());
      toast.info("Doctor removed!");
   };

   const priceChartData = data.map((doc) => ({
      name: doc.name,
      price: parseFloat(doc.fee.replace(/[^\d.]/g, "")),
   }));

   return (
      <div className="bg-gray-100 min-h-screen p-6">
         


         {priceChartData.length > 0 && (
            <div className="bg-white rounded-xl shadow p-4 mb-10">
               <h2 className="text-xl font-bold mb-4">Appointment Fee Chart (Bar)</h2>
               <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                     data={priceChartData}
                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Bar
                        dataKey="price"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                     >
                        {priceChartData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         )}

         <div className="py-10">
            <h2 className="text-[40px] mb-8 font-extrabold text-center">
               My Today Appointments
            </h2>
            <p className="text-center text-gray-600 text-[17px] mb-6">
               Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
         </div>

         <div className="bg-white rounded-xl shadow p-6 mx-auto">
            <div className="space-y-4 container mx-auto">
               {data.length > 0 ? (
                  data.map((item) => (
                     <div key={item.id} className="rounded-xl p-4">
                        <div className="flex justify-between items-start mb-3 border-b border-dotted py-4">
                           <div>
                              <h3 className="font-bold text-[20px] ">{item.name}</h3>
                              <p className="text-[18px] text-gray-600 mt-6">
                                 {item.education} - {item.speciality}
                              </p>
                           </div>
                           <div className="text-sm text-gray-700 font-semibold">
                              Appointment Fee: {item.fee} + VAT
                           </div>
                        </div>

                        <button
                           onClick={() => handleDelete(item.id)}
                           className="w-full border-2 border-red-400 text-red-500 rounded-full py-1 text-sm hover:bg-red-50"
                        >
                           Cancel Appointment
                        </button>
                     </div>
                  ))
               ) : (
                  <p className="text-center text-gray-500">No appointments found.</p>
               )}
            </div>
         </div>
      </div>
   );
}

export default LocalData;


