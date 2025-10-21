import React from "react";

const Legend = () => {
  return (
    <div className="absolute bottom-6 right-6 bg-black/80 p-4 rounded-xl border-2 border-yellow-500/40 z-20">
      <p className="text-yellow-400 mb-2 font-['RuneScape',_serif]">Legend:</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600 rounded border border-yellow-500" />
          <span className="text-white text-sm">Start</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-600 rounded border border-yellow-500" />
          <span className="text-white text-sm">Finish</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
