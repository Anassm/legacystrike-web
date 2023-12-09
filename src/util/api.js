export async function getDiscord() {
  try {
    const res = await fetch(import.meta.env.VITE_DISCORD_API_ID);

    if (!res.ok) {
      throw new Error(`Failed to fetch Discord data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching Discord data:", err);
    throw err;
  }
}

export async function getMatches() {
  try {
    const res = await fetch(import.meta.env.VITE_MATCHES_API_ENDPOINT);

    if (!res.ok) {
      throw new Error(`Failed to fetch recent matches. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching recent matches:", err);
    throw err;
  }
}
