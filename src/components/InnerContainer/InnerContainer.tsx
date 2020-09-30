import React from "react";
import { IMAGE_HEIGHT, IMAGE_WIDHT } from "../../shared/config";

interface Props {
  zIndex: number,
  children: React.ReactNode;
}

export const InnerContainer = ( props: Props ) => {
  const { children, zIndex } = props;
  return (
    <div style={{ width: IMAGE_WIDHT, height: IMAGE_HEIGHT, position: "absolute", zIndex}}>
      {children}
    </div>
  );
};
