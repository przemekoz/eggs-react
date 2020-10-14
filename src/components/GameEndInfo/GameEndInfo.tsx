import React from "react";
import { InnerContainer } from "../InnerContainer";

export const GameEndInfo = () => {
  return (
    <InnerContainer zIndex={200}>
      <span style={{ fontFamily: "monospace", fontSize: "19px", position: "absolute", top: "54px", right: "240px", color: "green" } as React.CSSProperties}>
        Well done!
      </span>
    </InnerContainer>
  );
};
