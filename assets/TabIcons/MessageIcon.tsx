import React from "react";
import { Svg, Path } from "react-native-svg";

interface MessageIconProps {
  width?: number;
  height?: number;
  color?: string;
}


export default function MessageIcon({ width, height, color }: MessageIconProps) {
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M11.3333 19.3334H20.6667M11.3333 12.6667H16"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8941 27.854C24.4715 27.4833 28.9141 22.9776 29.2797 17.3212C29.3512 16.2142 29.3512 15.0678 29.2797 13.9609C28.9141 8.30449 24.4715 3.79882 18.8941 3.42807C16.9913 3.30159 15.0048 3.30186 13.1059 3.42807C7.52851 3.79882 3.08587 8.30449 2.72031 13.9609C2.64878 15.0678 2.64878 16.2142 2.72031 17.3212C2.85346 19.3813 3.76457 21.2888 4.83721 22.8994C5.46001 24.027 5.04898 25.4344 4.40027 26.6637C3.93254 27.5501 3.69867 27.9933 3.88645 28.3134C4.07423 28.6336 4.49367 28.6438 5.33257 28.6642C6.99155 28.7046 8.11023 28.2342 8.99823 27.5794C9.50186 27.2081 9.75369 27.0224 9.92725 27.001C10.1008 26.9797 10.4424 27.1204 11.1253 27.4017C11.7392 27.6545 12.4519 27.8105 13.1059 27.854C15.0048 27.9802 16.9913 27.9805 18.8941 27.854Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
}