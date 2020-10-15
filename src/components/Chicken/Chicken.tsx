import React from "react";
import { getSideName } from "../../shared/helpers";
import { Side } from "../../shared/types";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props {
  side: Side,
  offset: number,
}

export const Chicken = ( { side, offset }: Props ) => {
  if ( side < 0 || side > 1 || offset < 0 || offset > 3 ) {
    return null;
  }
  return (
    <InnerContainer zIndex={200}>
      <Img name={`chicken_${getSideName( side )}_${offset}.png`} />
    </InnerContainer>
  );
};
