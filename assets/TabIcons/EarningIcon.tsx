import React from "react";
import { Svg, Path } from "react-native-svg";

interface EarningIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function EarningIcon({ width, height, color }: EarningIconProps) {
  return (
    <Svg
    width={width || 32}
    height={height || 32}
      viewBox="0 0 34 34"
      fill="none"
    >
      <Path
        d="M17.0007 31.1663C24.8247 31.1663 31.1673 24.8237 31.1673 16.9997C31.1673 9.17564 24.8247 2.83301 17.0007 2.83301C9.17662 2.83301 2.83398 9.17564 2.83398 16.9997C2.83398 24.8237 9.17662 31.1663 17.0007 31.1663Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
      />
      <Path
        d="M10.625 24.0837C13.9282 20.6239 20.0362 20.461 23.375 24.0837M20.5347 13.4587C20.5347 15.4147 18.9468 17.0003 16.988 17.0003C15.0293 17.0003 13.4413 15.4147 13.4413 13.4587C13.4413 11.5027 15.0293 9.91699 16.988 9.91699C18.9468 9.91699 20.5347 11.5027 20.5347 13.4587Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}