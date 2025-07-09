import React from "react";
import { Svg, Path } from "react-native-svg";

interface HomeIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function HomeIcon({ width, height, color }: HomeIconProps) {
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 35 34"
      fill="none"
    >
      <Path
        d="M21.75 24.083C20.6174 24.9647 19.1294 25.4997 17.5 25.4997C15.8705 25.4997 14.3827 24.9647 13.25 24.083"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M3.83179 18.7188C3.33168 15.4643 3.08162 13.8372 3.69689 12.3946C4.31215 10.9521 5.67719 9.96512 8.40727 7.99118L10.4471 6.51634C13.8432 4.06079 15.5413 2.83301 17.5007 2.83301C19.46 2.83301 21.1581 4.06079 24.5542 6.51634L26.5941 7.99118C29.3242 9.96512 30.6891 10.9521 31.3044 12.3946C31.9196 13.8372 31.6696 15.4643 31.1695 18.7188L30.7431 21.4939C30.034 26.1073 29.6796 28.414 28.0251 29.7902C26.3705 31.1663 23.9517 31.1663 19.114 31.1663H15.8874C11.0496 31.1663 8.63077 31.1663 6.97623 29.7902C5.3217 28.414 4.96722 26.1073 4.25826 21.4939L3.83179 18.7188Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
}