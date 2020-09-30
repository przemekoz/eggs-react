import React from "react";
import { BasketPosition } from "../../businessRules/shared/types";
import { getSideName } from "../../shared/helpers";
import { Side } from "../../shared/types";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props {
  branch: BasketPosition,
}

interface Props { }

export const Wolf = ( props: Props ) => {
  const { branch } = props;
  const side: Side = [ 0, 3 ].includes( branch ) ? Side.LEFT : Side.RIGHT;
  return (
    <>
      <InnerContainer zIndex={200}>
        <Img name={`wolf_${getSideName( side )}.png`} />
      </InnerContainer>
      <InnerContainer zIndex={200}>
        <Img name={`basket_${branch}.png`} />
      </InnerContainer>
    </>
  );
};
