import React from "react";
import { IMAGE_HEIGHT, IMAGE_WIDHT } from "../../shared/config";
import { getImagePath } from "../../shared/helpers";

interface Props { 
  name: string;
}

export const Img = ( props: Props ) => {
  const { name } = props;
  return (
    <img src={getImagePath( name )} width={IMAGE_WIDHT} height={IMAGE_HEIGHT} />
  );
};
