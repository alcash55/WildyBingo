import React from "react";
import { tiles } from "./WildernessBoard";

const getTypeColor = (type: (typeof tiles)[number]["type"]) => {
  switch (type) {
    case "start":
      return "bg-green-600/90";
    case "finish":
      return "bg-purple-600/90";
    default:
      return "bg-gray-700/90";
  }
};

// Narrow-viewport stand-in for the wilderness map (see issue #3). Same 31
// challenges, same reading order, but a plain list never has two items
// fighting over the same pixels the way shrunk map tiles do.
const ChallengeList = ({ className = "" }: { className?: string }) => {
  return (
    <ol
      className={`flex flex-col gap-2 rounded-2xl border-4 border-yellow-600/50 bg-black p-3 shadow-2xl ${className}`}
    >
      {tiles.map((tile) => (
        <li key={tile.id}>
          <button
            type="button"
            aria-label={`${tile.id}. ${tile.title}`}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-yellow-500/40 bg-white/5 p-3 text-left outline-none transition-colors hover:border-yellow-500/80 focus-visible:border-yellow-500 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-['RuneScape',_serif] text-black ${
                tile.type === "challenge" ? "bg-yellow-500" : getTypeColor(tile.type)
              } ${tile.type !== "challenge" ? "text-white" : ""}`}
            >
              {tile.id}
            </span>
            <span className="font-['RuneScape',_serif] text-sm leading-snug text-white">
              {tile.title}
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ChallengeList;
