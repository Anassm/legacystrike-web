import { useEffect, useState } from "react";

export default function Stats() {
  const [matchData, setMatchData] = useState([]);
  const [demoData, setDemoData] = useState([]);

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

  async function getDemoData() {
    const demoPromises = matchData.map(async (demo) => {
      try {
        const res = await fetch(demo);
        const data = await res.text();
        return data;
      } catch (err) {
        console.log(err);
        return "";
      }
    });

    const demoResults = await Promise.all(demoPromises);
    setDemoData(demoResults);
  }

  useEffect(() => {
    getDemos();
  }, []);

  useEffect(() => {
    if (matchData.length > 0) {
      getDemoData();
    }
  }, [matchData]);

  return (
    <>
      <h1>STATS PAGE</h1>
      {demoData.map((demo, index) => (
        <span key={index}>{demo}</span>
      ))}
    </>
  );
}
