export default function Mentors({ image, name, univ, certificate, classes }) {
  return (
    <div className="w-80 px-5 mb-28 hover:scale-105 transition-transform duration-[0.3s]">
      <div className="border-blue-950 p-3 bg-white rounded-lg border-2 border-solid">
        <img src={image} alt="" />
        <p className="font-bold text-center text-2xl my-2">
          {name ? name : "kosong"}
        </p>
        <p className="w-44 mx-auto text-center ">{univ}</p>

        <div className="flex justify-center gap-3 my-5">
          <img src="sertf.svg" alt="certificate" /> {certificate}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {
            // manggil bagian kelas (button)
            classes &&
              classes.map((item, index) => (
                <button
                  key={index}
                  className="flex justify-center items-center py-2 px-2 gap-1 bg-[#222F49]  text-white rounded-full w-full text-xs font-bold"
                >
                  <img src="/star1.svg" alt="star1" className="w-4 h-4" />
                  {item}
                </button>
              ))
          }
        </div>
      </div>
    </div>
  );
}
