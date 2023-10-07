import terroristsImg from "../../assets/static/images/teamselection-ct.webp";
import counterTerroristsImg from "../../assets/static/images/teamselection-t.webp";

export default function TeamSelection() {
  return (
    <>
      <h2
        style={{
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          backgroundImage: "linear-gradient(45deg, #1d2c48, #ffa400)",
        }}
        className="text-5xl font-bold mb-2"
      >
        What team will you be in?
      </h2>
      <h3 className="text-stone-900 text-xl font-bold mb-8">
        Join our community now
      </h3>
      <div className="grid grid-cols-2 gap-x-12">
        {/* Terrorists */}
        <div className="group relative bg-opacity-50 hover:bg-opacity-100 transition duration-300">
          <span className="flex justify-center text-2xl text-ct-blue font-semibold">
            COUNTER-TERRORISTS
          </span>
          <img
            className="border-solid border-gray-400 border-4"
            src={terroristsImg}
            alt="Image of terrorists"
            height={420}
            width={420}
          />
          <span className="flex justify-center font-semibold">Players: 0</span>
        </div>

        {/* Counter terrorists */}
        <div className="group relative bg-opacity-50 hover:bg-opacity-100 transition duration-300">
          <span className="flex justify-center text-2xl text-t-orange font-semibold">
            TERRORISTS
          </span>
          <img
            className="border-solid border-gray-400 border-4"
            src={counterTerroristsImg}
            alt="Image of counter terrorists"
            height={420}
            width={420}
          />
          <span className="flex justify-center font-semibold">Players: 0</span>
        </div>
      </div>
    </>
  );
}
