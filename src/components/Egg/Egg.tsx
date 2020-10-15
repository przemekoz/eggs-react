import React from "react";
import { Branch } from "../../shared/types";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props {
  branch: Branch,
  offset: number,
}

export const Egg = ( { branch, offset }: Props ) => {
  if ( branch < 0 || branch > 3 || offset < 0 || offset > 4 ) {
    return null;
  }
  return (
    <InnerContainer  zIndex={200}>
      <Img name={`branch_${branch}_${offset}.png`}  />
    </InnerContainer>
  );
};
