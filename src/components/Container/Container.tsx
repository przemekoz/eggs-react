import React from "react";
import { IMAGE_HEIGHT, IMAGE_WIDHT } from "../../shared/config";

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => (
  <div style={{ width: IMAGE_WIDHT, height: IMAGE_HEIGHT, position: "relative" }}>
    {children}
  </div>
);

