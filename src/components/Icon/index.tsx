/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as Icons from "../assets";

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  color = "#000",
  size = 24,
}) => {
  const IconPath = Icons[name];

  if (!IconPath) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <IconPath color={color} />
    </svg>
  );
};

export default Icon;
