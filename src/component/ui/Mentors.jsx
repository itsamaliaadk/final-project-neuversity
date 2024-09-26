export default function Mentors({ image, name, univ, certificate, classes }) {
  // styling
  return (
    

      <div className="w-80 px-5 mb-28">
        <div className="border border-blue-950 p-3 bg-white rounded-lg">
          <img src={image} alt="" />
          <p className="font-bold text-center text-2xl mb-2">
            {name ? name : "kosong"}
          </p>
          <p className="w-1/4 mx-auto text-center">{univ}</p>

          {/* design certificate */}
          <div className="flex justify-center gap-5">
            <img src="sertf.svg" alt="" /> {certificate}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {
              // manggil bagian kelas (button)
              classes &&
                classes.map((item, index) => (
                  <button
                    key={index}
                    className="flex py-2 px-4 bg-[#222F49] mb-3 text-white"
                  >
                    <img src="/star1.svg" alt="star1" />
                    {item}
                  </button>
                ))
            }
          </div>
        </div>
      </div>
    
  );
}
