import { useEffect, useState } from "react";

export default function Stats() {
  const [matchData, setMatchData] = useState([]);

  async function getDemos() {
    try {
      const res = await fetch("http://localhost:3000/api/recent-matches");
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
      <h1>STATS PAGE</h1>
      {matchData.map((match, index) => (
        <div key={index}>
          <span>{match.matchData.ctScore}</span>
          <span>{match.matchData.tScore}</span>
          <span>{match.players[0].name}</span>
          <span>{match.players[0].steamId}</span>
        </div>
      ))}
    </>
  );
}
