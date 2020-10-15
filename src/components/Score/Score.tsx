import { relative } from "path";
import React from "react";
import { InnerContainer } from "../InnerContainer";

interface Props {
  score: number
}

export const Score = ( { score }: Props ) => {
  if ( score < 0 ) {
    return null;
  }
  return (
    <InnerContainer zIndex={200}>
      <span style={{ fontFamily: "monospace", fontSize: "38px", position: "absolute", top: "54px", right: "210px" } as React.CSSProperties}>
        {score}
      </span>
    </InnerContainer>
  );
};
