import React from "react";

export default function Values({ icon, title, desc }) {
  return (
    <div className="">
      <img src={icon} className="items-center" alt="icons" />
      <p className="text-center">{title}</p>
      <p className="text-center text-gray-500">{desc}</p>
    </div>
  );
}

// return (
//   // hilangin bg slate
//   <section className="py-20">
//     <div className="container grid grid-cols-3">
//       {/* title */}
//       <p className="font-bold text-3xl text-center flex items-start my-40">
//         OUR <br />
//         CORE <br />
//         VALUES
//       </p>

//       {/* kotak 2 atas bawah pertama */}
//       <div>
//         <div className="card-1 bg-white w-72 h-52 rounded-xl my-5">
//           <div className="py-5 text-center">
//             {/* blm bisa nengah iconnya */}
//             <img src="/piala.svg" className="flex items-center" alt="piala" />

//             <p className="font-bold text-2xl my-1">Excellence</p>

//             <p className="text-slate-500 my-2">
//               We strive for the highest standards in everything we do.
//             </p>
//           </div>
//         </div>

//         <div className="card-1 bg-white w-72 h-52 rounded-xl my-5">
//           <div className="py-5 text-center">
//             {/* blm bisa nengah iconnya */}
//             <img src="/idea.svg" className="flex items-center" alt="idea" />

//             <p className="font-bold text-2xl my-1">Innovation</p>

//             <p className="text-slate-500 my-2 mx-3">
//               We continuously innovate to provide the best learning
//               experience.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* kotak 2 atas bawah kedua */}
//       <div>
//         <div className="card-1 bg-white w-72 h-52 rounded-xl my-5">
//           <div className="py-5 text-center">
//             {/* blm bisa nengah iconnya */}
//             <img src="/hand.svg" className="flex items-center" alt="hand" />

//             <p className="font-bold text-2xl my-1">Inclusivity</p>

//             <p className="text-slate-500 my-2">
//               We believe in creating a learning environment where everyone is
//               welcome.
//             </p>
//           </div>
//         </div>

//         <div className="card-1 bg-white w-72 h-52 rounded-xl my-5">
//           <div className="py-5 text-center">
//             {/* blm bisa nengah iconnya */}
//             <img
//               src="/community.svg"
//               className="flex items-center"
//               alt="community"
//             />

//             <p className="font-bold text-2xl my-1">Community</p>

//             <p className="text-slate-500 my-2 mx-3">
//               We foster a supportive and collaborative learning community.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// error gabisa dibuka putih semua
