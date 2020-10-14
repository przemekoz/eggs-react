import React from "react";
import { Img } from "../Img";
import { InnerContainer } from "../InnerContainer";

interface Props {
  fails: number
}

export const Fail = ( props: Props ) => {
  const { fails } = props;

  if ( fails < 0 || fails > 3 ) {
    return null;
  }

  return (
    <InnerContainer zIndex={200}>
      <Img name={`fail_${fails - 1}.png`} />
    </InnerContainer>
  );
};
