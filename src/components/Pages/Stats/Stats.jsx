import { Suspense, useEffect, useSyncExternalStore } from "react";
import { Await, defer, useLoaderData, useRevalidator } from "react-router-dom";
import { getMatches } from "../../../util/api";

export function loader() {
  return defer({ matches: getMatches() });
}

export default function Stats() {
  const dataPromise = useLoaderData();
  const { revalidate } = useRevalidator();

  const mapNames = [
    { original: "workshop/2957595230/de_seaside_2014_og", name: "Seaside" },
    { original: "workshop/2957592399/de_cbble_2015_og", name: "Cbble" },
    { original: "workshop/779282997/de_zoo", name: "Zoo" },
    { original: "workshop/2957593071/de_cache_2014_og", name: "Cache" },
    { original: "workshop/131712577/de_mirage_go", name: "Mirage" },
  ];

  // { original: "de_cbble", name: "Cobble" },
  // { original: "de_cache", name: "Cache" },
  // { original: "de_mirage", name: "Mirage" },
  // { original: "de_nuke", name: "Nuke" },
  // { original: "de_overpass", name: "Overpass" },
  // { original: "de_vertigo", name: "Vertigo" },
  // { original: "de_season", name: "Season" },
  // { original: "de_inferno", name: "Inferno" },
  // { original: "de_dust2", name: "Dust" },

  let onlineStatus = useSyncExternalStore(
    (callback) => {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);
      return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
      };
    },
    () => navigator.onLine,
    () => true
  );

  useEffect(() => {
    if (!onlineStatus) return;
    let id = setInterval(revalidate, 300000);
    return () => clearInterval(id);
  }, [onlineStatus, revalidate]);

  function renderMatchesElements(matches) {
    return matches.length >= 1 ? (
      <div className="flex items-center justify-center m-5">
        <div className="w-full lg:w-96 col-span-2 pb-5 pl-7 pr-7 pt-7 text-white bg-opacity-75 text-center rounded-lg bg-gray-950 backdrop-blur">
          <h1 className="mb-6 text-lg font-bold">
            Recent {matches.length} games
          </h1>
          <div className="flex justify-between mb-4">
            <span className="font-bold text-lg">Counter Terrorists</span>
            <span className="font-bold text-lg">Terrorists</span>
          </div>
          {matches.map((match, index) => {
            const playedMap = mapNames.find((map) => map.original === match.mapName)
            const overlayColorClass = match && match.matchData.ctScore > match.matchData.tScore? "bg-ct-blue opacity-70": match && match.matchData.tScore > match.matchData.ctScore? "bg-t-orange": "";
            return (
              <div key={index}
                className={`relative mb-4 pl-6 pr-6 pt-3 pb-4 cursor-pointer rounded-md bg-center object-fill`}
                style={{backgroundImage: playedMap? `url('./src/assets/static/maps/${playedMap.name.toLowerCase()}.jpg')`: "",backgroundPosition: "center",backgroundSize: "cover",
                }}>
                <div className={`absolute inset-0 ${overlayColorClass} opacity-50 rounded-md`}></div>
                {playedMap ? (
                  <span className="z-10 relative text-white">
                    {playedMap.name} - ??? Hours ago
                  </span>
                ) : (
                  <span className="z-10 relative text-white">
                    No mapname found - ??? Hours ago
                  </span>
                )}
                <span className="z-10 relative flex justify-center font-bold text-white text-center text-2xl mt-1">{`${match?.matchData.ctScore || 0
                  } - ${match?.matchData.tScore || 0}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center mt-20">
        <div className="col-span-2 p-7 text-white bg-opacity-75 text-center rounded-lg bg-gray-950 backdrop-blur">
          <p className="text-lg">
            It seems like something went wrong when gathering stats. Please
            contact the LegacyStrike team if this isn&apos;t resolved after a
            couple of minutes.{" "}
            <a
              href="https://discord.gg/legacystrike"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-blue-500 visited:text-purple-500 underline">
                Discord
              </span>
            </a>{" "}
            works best &#129312;
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<img src="/Spinner-1s-200px.gif" alt="Loading..." />}>
      <Await resolve={dataPromise.matches}>{renderMatchesElements}</Await>
    </Suspense>
  );
}
