import React from "react";
import { useNowPlaying } from "./hooks/MyMusic.ts";
import "./styles/NowPlaying.css";

export const NowPlaying: React.FC = () => {
  const { track, isPlaying } = useNowPlaying();

  if (!track) return null;

  const { artist, name, image } = track;
  const cover = image.find((img) => img.size === "medium")?.["#text"];

  return (
    <div className="now-playing-wrapper">
      <div className="now-playing-container">
        <div className="vinyl-wrapper">
          <img
            src={cover}
            alt="Album Cover"
            className={`vinyl ${isPlaying ? "spin" : ""}`}
          />
        </div>
        <div className="now-playing-text">
          <div className="now-playing-label">
            {isPlaying ? "Now playing" : "Last played"}
          </div>
          <div className="now-playing-track">
            {name} — {artist["#text"]}
          </div>
        </div>
      </div>
    </div>
  );
};