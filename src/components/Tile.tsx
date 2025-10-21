import React from "react";
import { TileProps } from "../types/types";

const Tile = ({
  tile,
  tileNumber,
}: {
  tile: TileProps;
  tileNumber: number;
}) => {
  const getSizeClass = () => {
    switch (tile.size) {
      case "large":
        return "w-20 h-20";
      case "medium":
        return "w-16 h-16";
      case "small":
        return "w-12 h-12";
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
    <div
      className={`absolute ${getSizeClass()} ${getTypeColor()} rounded-xl border-2 border-yellow-500/80 shadow-xl flex flex-col items-center justify-center p-1
    -translate-x-1/2 -translate-y-1/2 transform-gpu transition-transform hover:scale-125 cursor-pointer group`}
      style={{ left: `${tile.x}%`, top: `${tile.y}%` }}
    >
      {/* Tile Number */}
      <div className="absolute -top-1.5 -left-1.5 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center font-['RuneScape',_serif] z-10 text-[10px]">
        {tileNumber}
      </div>

      {/* Content */}
      <div className="text-white text-center">
        <p className="text-[7px] leading-tight font-['RuneScape',_serif] group-hover:text-yellow-300 transition-colors">
          {tile.title}
        </p>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default Tile;
