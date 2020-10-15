import React from "react";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props {
  fails: number
}

export const Fail = ( { fails }: Props ) => {

  if ( fails < 1 || fails > 3 ) {
    return null;
  }

  return (
    <InnerContainer zIndex={200}>
      <Img name={`fail_${fails - 1}.png`} />
    </InnerContainer>
  );
};
