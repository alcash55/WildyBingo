export type TileProps = {
  id: number;
  x: number;
  y: number;
  title: string;
  size: "small" | "medium" | "large";
  type: "start" | "finish" | "challenge";
};
