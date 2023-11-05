import { useEffect, useState } from "react";
import mirage from "../../../assets/static/maps/mirage.jpg";

export default function Stats() {
  const [matchData, setMatchData] = useState([]);

  const apiPort = import.meta.env.VITE_API_PORT;

  async function getDemos() {
    try {
      const res = await fetch(`http://localhost:${apiPort}/api/recent-matches`);
      const data = await res.json();
      setMatchData(data);
    } catch (err) {
      console.log(err);
      setMatchData([]);
    }
  }

  useEffect(() => {
    getDemos();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="mb-6 text-lg font-bold">
          Recent {matchData.length} games
        </h1>

        <div className="w-60">
          <div className="flex justify-between mb-4">
            <span className="font-bold">CT</span>
            <span className="font-bold">T</span>
          </div>
          {matchData.map((match, index) => (
            <div
              key={index}
              className={`${
                match.matchData.ctScore > match.matchData.tScore
                  ? "bg-ct-blue"
                  : ""
              } ${
                match.matchData.tScore > match.matchData.ctScore
                  ? "bg-t-orange"
                  : ""
              }
                mb-2 pl-6 pr-6 pt-4 pb-4 rounded-md`}
            >
              <span className="flex justify-center font-bold text-white text-center">{`${match.matchData.ctScore} - ${match.matchData.tScore}`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// `bg-mirage bg-cover bg-center`
