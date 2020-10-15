import React from "react";
import { IMAGE_HEIGHT, IMAGE_WIDHT } from "../../shared/config";

interface Props {
  zIndex: number,
  children: React.ReactNode;
}

export const InnerContainer = ({ children, zIndex }: Props) => (
  <div style={{ width: IMAGE_WIDHT, height: IMAGE_HEIGHT, position: "absolute", zIndex }}>
    {children}
  </div>
);
