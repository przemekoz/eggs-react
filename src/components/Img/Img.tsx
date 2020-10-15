import React from "react";
import { IMAGE_HEIGHT, IMAGE_WIDHT } from "../../shared/config";
import { getImagePath } from "../../shared/helpers";

interface Props {
  name: string;
}

export const Img = ({ name }: Props) => (
  <img src={getImagePath(name)} width={IMAGE_WIDHT} height={IMAGE_HEIGHT} alt="" />
);

