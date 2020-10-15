import React from "react";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

export const Background = () => (
  <InnerContainer zIndex={100}>
    <Img name="empty.png" />
  </InnerContainer>
);
