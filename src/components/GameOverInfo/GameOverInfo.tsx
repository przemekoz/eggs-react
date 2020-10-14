import React from "react";
import { InnerContainer } from "../InnerContainer";

export const GameOverInfo = () => {
  return (
    <InnerContainer zIndex={200}>
      <span style={{ fontFamily: "monospace", fontSize: "20px", position: "absolute", top: "54px", right: "245px", color: "red" } as React.CSSProperties}>
        Game Over
      </span>
    </InnerContainer>
  );
};
