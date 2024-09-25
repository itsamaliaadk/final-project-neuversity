export default function Mentors({ image, name, univ, certificate, classes }) {
  // styling
  return (
    <div className="border p-3 bg-white">
      <img src={image} alt="" />
      <h2>{name ? name : "kosong"}</h2>
      <p className="w-1/4 mx-auto text-center">{univ}</p>

      {/* design certificate */}
      <p>{certificate}</p>

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
  );
}
