import React from "react";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props { }

export const Background = ( props: Props ) => {
  return (
    <InnerContainer zIndex={100}>
      <Img name="empty.png" />
    </InnerContainer>
  );
};
