

export const getData = () => {
   const doctors = localStorage.getItem("doctors");
   if (doctors) return JSON.parse(doctors);
   return [];
};

export const addData = (data) => {
   const doctors = getData();
   const isExist = doctors.find(p => p.id === data.id);

   if (isExist) {
      // toast.warning("Already added!");
      console.log("hrt");
      
      return false; 
   }

   doctors.push(data);
   localStorage.setItem("doctors", JSON.stringify(doctors));
   return true; 
};


export const removeData = (id) => {
   const doctors = getData();
   const updatedDoctors = doctors.filter(doctor => doctor.id !== id);
   localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
};
