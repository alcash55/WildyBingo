import React, { useState } from "react";
//@ts-ignore
import imgWildernessMap from "../assets/wildy.png";
import Legend from "./Legend";
import Tile from "./Tile";
import { TileProps } from "../types/types";

const tiles: TileProps[] = [
  {
    id: 1,
    x: 80,
    y: 96,
    title: "Start - Move to tile #2",
    size: "large",
    type: "start",
  },
  {
    id: 2,
    x: 92,
    y: 82,
    title: "Get a teleport anchoring scroll from zombie pirates",
    size: "medium",
    type: "challenge",
  },
  {
    id: 3,
    x: 65,
    y: 72,
    title: "Get a slayers enchantment from Ents",
    size: "medium",
    type: "challenge",
  },
  {
    id: 4,
    x: 40,
    y: 72,
    title: "Get a rune pouch from LMS",
    size: "medium",
    type: "challenge",
  },
  {
    id: 5,
    x: 8,
    y: 6,
    title: "Do 300 laps in the wildy agility without leaving or dying",
    size: "medium",
    type: "challenge",
  },
  {
    id: 6,
    x: 4,
    y: 40,
    title: "Loot 5 keys in one PKing trip",
    size: "medium",
    type: "challenge",
  },
  {
    id: 7,
    x: 8,
    y: 30,
    title: "Build a wildy shield from scratch",
    size: "medium",
    type: "challenge",
  },
  {
    id: 8,
    x: 22,
    y: 52,
    title:
      "Get uncut ruby, uncut emerald, or uncut diamond from wildy GWD Bloodvelves OR Get 2 Dragon boots drops from wildy GWD",
    size: "large",
    type: "challenge",
  },
  {
    id: 9,
    x: 30,
    y: 68,
    title:
      "Get a wildy weapon or amulet of avarice OR Get up to a 7m looting bag in rev without dying or leaving",
    size: "medium",
    type: "challenge",
  },
  {
    id: 10,
    x: 65,
    y: 96,
    title:
      "Unlock the slayer task extension Revenenenenenenants AND Get enough wildy slayer points to get an herb sack",
    size: "large",
    type: "challenge",
  },
  {
    id: 11,
    x: 45,
    y: 35,
    title: "Get a Ancient statuette or higher",
    size: "medium",
    type: "challenge",
  },
  {
    id: 12,
    x: 10,
    y: 60,
    title: "Get 2 ancient staffs from the Chaos Fanatic AND Get a fedora",
    size: "medium",
    type: "challenge",
  },
  {
    id: 13,
    x: 95,
    y: 16,
    title: "Get all 3 wildy rings OR Get an eternal glory",
    size: "medium",
    type: "challenge",
  },
  {
    id: 14,
    x: 67,
    y: 15,
    title: "Get chaos elemental pet",
    size: "medium",
    type: "challenge",
  },
  {
    id: 15,
    x: 25,
    y: 5,
    title: "Get 2 pieces of Dagon'hai",
    size: "medium",
    type: "challenge",
  },
  {
    id: 16,
    x: 75,
    y: 10,
    title: "Get 750k Thieving xp",
    size: "medium",
    type: "challenge",
  },
  {
    id: 17,
    x: 70,
    y: 40,
    title: "Bulid a voidwaker from scratch",
    size: "medium",
    type: "challenge",
  },
  {
    id: 18,
    x: 49,
    y: 72,
    title: "Get a swift blade from LMS OR Get all golden godsword specials",
    size: "medium",
    type: "challenge",
  },
  {
    id: 19,
    x: 52,
    y: 14,
    title: "Get 750k fishing xp (Dark Crabs or Lava eels)",
    size: "medium",
    type: "challenge",
  },
  {
    id: 20,
    x: 33,
    y: 52,
    title: "Get a dragon pickaxe OR Get 750k Mining xp",
    size: "medium",
    type: "challenge",
  },
  {
    id: 21,
    x: 20,
    y: 30,
    title: "Get 3 kbd heads OR Get a Dragon Pickaxe from KBD",
    size: "medium",
    type: "challenge",
  },
  {
    id: 22,
    x: 43,
    y: 83,
    title: "Get the elder chaos robe ornament kit from BH",
    size: "medium",
    type: "challenge",
  },
  {
    id: 23,
    x: 47,
    y: 49,
    title: "Get 500k hunter xp (black chins or salamanders)",
    size: "medium",
    type: "challenge",
  },
  {
    id: 24,
    x: 35,
    y: 83,
    title: "Get enough points at BH for a kit",
    size: "medium",
    type: "challenge",
  },
  {
    id: 25,
    x: 69,
    y: 84,
    title: "Get 1 piece of elder chaos outfit",
    size: "medium",
    type: "challenge",
  },
  {
    id: 26,
    x: 50,
    y: 78,
    title: "Loot a key that is 5m or higher",
    size: "medium",
    type: "challenge",
  },
  {
    id: 27,
    x: 25,
    y: 75,
    title: "Get a PK in at least 1 full set of Moons Armour",
    size: "medium",
    type: "challenge",
  },
  {
    id: 28,
    x: 80,
    y: 37,
    title: "PK 3 members of other teams without dying",
    size: "medium",
    type: "challenge",
  },

  {
    id: 29,
    x: 18,
    y: 68,
    title: "Get 2 Dragon longswords from bandits",
    size: "medium",
    type: "challenge",
  },
  {
    id: 30,
    x: 80,
    y: 45,
    title: "Get 2 Dragon 2h swords OR Get 10 keys from anti-pking",
    size: "medium",
    type: "challenge",
  },
  {
    id: 31,
    x: 10,
    y: 95,
    title: "Finish",
    size: "large",
    type: "finish",
  },
];

function PathLine({
  fromTile,
  toTile,
  active,
}: {
  fromTile: TileProps;
  toTile: TileProps;
  active: boolean;
}) {
  const x1 = fromTile.x;
  const y1 = fromTile.y;
  const x2 = toTile.x;
  const y2 = toTile.y;

  return (
    <>
      <line
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke={active ? "green" : "rgba(255, 215, 0, 0.4)"}
        strokeWidth={active ? "4" : "2.5"}
        strokeDasharray="6,3"
        style={{
          transition: "stroke 0.25s ease-in-out",
        }}
      />
    </>
  );
}

export function WildernessBoard() {
  const [hoveredTileId, setHoveredTileId] = useState<number | null>(null);

  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* <div className="min-h-screen flex items-center justify-center"> */}

      <div className="relative w-full max-w-5xl aspect-[3/4] bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-600/50">
        {/* Wilderness Map Background */}
        <img
          src={imgWildernessMap}
          alt="Wilderness Map"
          className="absolute w-full h-full opacity-80"
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* SVG for path lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {tiles.slice(0, -1).map((tile) => (
            <React.Fragment key={tile.id}>
              <PathLine
                fromTile={tile}
                toTile={tiles.find((t) => t.id === tile.id + 1) as TileProps}
                active={hoveredTileId === tile.id}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Tiles */}
        <div className="relative w-full h-full z-10">
          {tiles.map((tile, index) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHoveredTileId(tile.id)}
              onMouseLeave={() => setHoveredTileId(null)}
            >
              <Tile tile={tile} tileNumber={tile.id} />
            </div>
          ))}
        </div>

        {/* Legend */}
        <Legend />
      </div>
    </div>
  );
}
