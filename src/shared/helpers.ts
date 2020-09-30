import { Side } from "./types";

export const getImagePath = ( imageName: string ) => {
  return `assets/midSize/${imageName}`;
}

export const getSideName = ( side: Side ): string => {
  return side === Side.LEFT ? "left" : "right";
}