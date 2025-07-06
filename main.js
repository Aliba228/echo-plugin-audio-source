async function searchTracks(query) {
  const response = await fetch(`https://soundgasm-api.vercel.app/search/${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results.map(r => ({
    title: r.title,
    artist: r.username,
    url: r.audio_url,
    artwork: "https://soundgasm.net/favicon.ico"
  }));
}

async function play(url) {
  return {
    streamUrl: url,
    mimeType: "audio/mpeg"
  };
}

export default { searchTracks, play };
