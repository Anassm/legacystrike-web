export async function getDiscord() {
  try {
    const res = await fetch(
      `https://discord.com/api/guilds/973441288584192061/widget.json`
    );
    const dat = await res.json();

    return dat;
  } catch (err) {
    console.error(err);
  }
}
