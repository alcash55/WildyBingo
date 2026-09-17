import React from "react";
import { WildernessBoard } from "./components/WildernessBoard";

export default function App() {
  return (
    <div className="size-full bg-[#1a1a1a] overflow-auto">
      <main className="flex min-h-full flex-col items-center gap-4 py-6">
        <h1 className="px-4 text-center font-['RuneScape',_serif] text-2xl text-yellow-400 sm:text-3xl">
          Wildy Bingo Board
        </h1>
        <WildernessBoard />
      </main>
    </div>
  );
}
