

function Bloge() {


   // src/data/blogData.js

   const blogData = [
      {
         question: "What is useState and how does it work in React?",
         answer: "useState হলো React এর একটি হুক যা কম্পোনেন্টের state ব্যবস্থাপনা করতে সাহায্য করে। এটি একটি ভ্যালু এবং একটি সেটার ফাংশন রিটার্ন করে। যখন এই ফাংশন দিয়ে state আপডেট করা হয়, তখন কম্পোনেন্ট রিরেন্ডার হয়।"
      },
      {
         question: "What is the purpose of useEffect in React?",
         answer: "useEffect হুক ব্যবহার করা হয় side effect পরিচালনার জন্য, যেমন API কল, ইভেন্ট লিসেনার সেট করা, বা টাইমার চালানো। এটি নির্দিষ্ট dependency এর উপর ভিত্তি করে রান হয়।"
      },
      {
         question: "What is a custom hook in React and when should you use one?",
         answer: "Custom hook হলো নিজের তৈরি হুক যা React হুকের উপর ভিত্তি করে গঠিত হয়। যখন একই ধরনের লজিক বারবার বিভিন্ন কম্পোনেন্টে প্রয়োজন হয়, তখন সেই লজিকটা custom hook করে ব্যবহার করা ভালো।"
      },
      {
         question: "Difference between controlled and uncontrolled components? Which one is better?",
         answer: "Controlled component এর ইনপুট ভ্যালু state দ্বারা নিয়ন্ত্রিত হয় এবং প্রতিটি পরিবর্তনে state আপডেট হয়। Uncontrolled component এ ইনপুট ফিল্ড ডাইরেক্ট DOM থেকে ভ্যালু নেয়। Controlled component বেশি predictable এবং validation সহজ হয়, তাই এটাকেই বেশি প্রেফার করা হয়।"
      },
      {
         question: "Tell us something about useFormStatus() (explore and explain)",
         answer: "`useFormStatus()` হচ্ছে React এর নতুন ফিচার (React Server Components context এ ব্যবহৃত), যা form submission এর status track করতে দেয়, যেমন submitting state। এটি এখন experimental পর্যায়ে আছে এবং future features এর জন্য ব্যবহৃত হচ্ছে।"
      }
   ];


   return (
      <>
         
         <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-8 text-center">📝 Blogs Page</h1>
            <div className="space-y-6">
               {blogData.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                        {index + 1}. {item.question}
                     </h3>
                     <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
               ))}
            </div>
         </div>
         
      </>
   );
}

export default Bloge;