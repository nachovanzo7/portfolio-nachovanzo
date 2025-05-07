// src/hooks/useNowPlaying.ts
import { useState, useEffect } from "react";

type Track = {
  artist: { "#text": string };
  name: string;
  album: { "#text": string };
  image: { size: string; "#text": string }[];
  "@attr"?: { nowplaying: string };
};

export function useNowPlaying(pollInterval = 15_000) {
  const [track, setTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
  const USER = import.meta.env.VITE_LASTFM_USERNAME;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    async function fetchNowPlaying() {
      try {
        const res = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`
        );
        const data = await res.json();
        const recent = data.recenttracks.track[0] as Track;
        const now = recent["@attr"]?.nowplaying === "true";

        setTrack(recent);
        setIsPlaying(now);
      } catch (err) {
        console.error("Error fetching Last.fm:", err);
      }
    }

    fetchNowPlaying();
    timer = setInterval(fetchNowPlaying, pollInterval);

    return () => clearInterval(timer);
  }, [API_KEY, USER, pollInterval]);

  return { track, isPlaying };
}
