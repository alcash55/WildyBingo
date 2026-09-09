import React from "react";
import { TileProps } from "../types/types";

const Tile = ({
  tile,
  tileNumber,
  onFocus,
  onBlur,
}: {
  tile: TileProps;
  tileNumber: number;
  onFocus?: () => void;
  onBlur?: () => void;
}) => {
  // Sized in cqw (percent of the board's own rendered width, set up via the
  // `@container` on the board wrapper in WildernessBoard) rather than a fixed
  // px value, so tiles shrink with the board instead of staying full-size
  // while the board shrinks around them. See issue #3: at a fixed 64-80px,
  // tiles spanned 15-25% of a 320px-wide board and piled into an unreadable
  // stack. clamp() keeps a sane floor and ceiling either side of that scale.
  const getSizeClass = () => {
    switch (tile.size) {
      case "large":
        return "w-[clamp(26px,9cqw,80px)] h-[clamp(26px,9cqw,80px)]";
      case "medium":
        return "w-[clamp(22px,7.2cqw,64px)] h-[clamp(22px,7.2cqw,64px)]";
      case "small":
        return "w-[clamp(18px,5.4cqw,48px)] h-[clamp(18px,5.4cqw,48px)]";
    }
  };

  const getTypeColor = () => {
    switch (tile.type) {
      case "start":
        return "bg-green-600/90";
      case "finish":
        return "bg-purple-600/90";
      default:
        return "bg-gray-700/90";
    }
  };

  return (
    <button
      type="button"
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={`${tileNumber}. ${tile.title}`}
      className={`absolute ${getSizeClass()} ${getTypeColor()} rounded-xl border-2 border-yellow-500/80 shadow-xl flex flex-col items-center justify-center p-1
    -translate-x-1/2 -translate-y-1/2 transform-gpu transition-transform hover:scale-125 focus-visible:scale-125 cursor-pointer group outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 motion-reduce:transition-none`}
      style={{ left: `${tile.x}%`, top: `${tile.y}%` }}
    >
      {/* Tile Number */}
      <div className="absolute -top-1.5 -left-1.5 bg-yellow-500 text-black rounded-full w-[clamp(14px,2.4cqw,20px)] h-[clamp(14px,2.4cqw,20px)] flex items-center justify-center font-['RuneScape',_serif] z-10 text-[clamp(6px,1.4cqw,10px)]">
        {tileNumber}
      </div>

      {/* Content */}
      <div className="text-white text-center">
        <p className="text-[clamp(4.5px,1.4cqw,7px)] leading-tight font-['RuneScape',_serif] group-hover:text-yellow-300 group-focus-visible:text-yellow-300 transition-colors">
          {tile.title}
        </p>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-yellow-500/20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
};

export default Tile;
