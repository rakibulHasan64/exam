import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function CountBy({ doctors }) {
   // speciality অনুযায়ী কাউন্ট করার লজিক
   const count = {};
   doctors.forEach(doc => {
      if (count[doc.speciality]) {
         count[doc.speciality]++;
      } else {
         count[doc.speciality] = 1;
      }
   });

   // Recharts এর জন্য array বানানো
   const chartData = Object.keys(count).map(key => ({
      speciality: key,
      count: count[key]
   }));

   return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
         <h2 className="text-xl font-bold mb-4">Doctors by Speciality</h2>
         <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
               <XAxis dataKey="speciality" />
               <YAxis />
               <Tooltip />
               <Bar dataKey="count" fill="#6366f1" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default CountBy;
