import React, { useState } from "react";

function Score() {
   const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-400">
      <div className="bg-white p-10 rounded-2xl shadow-green-600 text-center w-[300px]">
        <h2 className="text-2xl font-bold text-black-700 mb-2">
          Cricket score
        </h2>
        <p className=" hidden text-gray-500 mb-6">
          State example using <span className="font-bold"> useState()</span>
        </p>
        <h1 className="text-7xl font-extrabold text-blue-600 mb-8">
          {score}</h1>

          <button className="bg-green-300 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-green-500 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,0.1)] "
          onClick ={()=>{
               setScore(score+1);
          }} 
          >Increment</button>
      </div>
    </div>
  );
}

export default Score;
