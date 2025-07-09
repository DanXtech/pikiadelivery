import React from "react";
import { Svg, Path } from "react-native-svg";

interface TripIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function TripIcon({ height, color }: TripIconProps) {
  return (
    <Svg
      width={35}
      height={34}
      viewBox="0 0 35 34"
      fill="none"
    >
      <Path
        d="M24.5833 28.3334C26.1481 28.3334 27.4167 27.0648 27.4167 25.5C27.4167 23.9352 26.1481 22.6667 24.5833 22.6667C23.0185 22.6667 21.75 23.9352 21.75 25.5C21.75 27.0648 23.0185 28.3334 24.5833 28.3334Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
      />
      <Path
        d="M10.4167 28.3334C11.9815 28.3334 13.25 27.0648 13.25 25.5C13.25 23.9352 11.9815 22.6667 10.4167 22.6667C8.85187 22.6667 7.58334 23.9352 7.58334 25.5C7.58334 27.0648 8.85187 28.3334 10.4167 28.3334Z"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
      />
      <Path
        d="M7.58334 25.4609C6.02966 25.3836 5.0604 25.1524 4.37067 24.4627C3.68094 23.773 3.44982 22.8037 3.37237 21.25M13.25 25.5H21.75M27.4167 25.4609C28.9703 25.3836 29.9396 25.1524 30.6294 24.4627C31.6667 23.4253 31.6667 21.7558 31.6667 18.4167V15.5834H25.0083C23.9536 15.5834 23.4262 15.5834 22.9995 15.4447C22.1369 15.1644 21.4606 14.4881 21.1804 13.6256C21.0417 13.1988 21.0417 12.6714 21.0417 11.6167C21.0417 10.0346 21.0417 9.24356 20.8337 8.60337C20.4132 7.30951 19.3989 6.29509 18.1051 5.8747C17.4649 5.66669 16.6738 5.66669 15.0917 5.66669H3.33334"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33334 11.3333H11.8333"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33334 15.5833H9.00001"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0417 8.5H23.6217C25.6835 8.5 26.7143 8.5 27.5532 9.00109C28.3922 9.50218 28.8809 10.4098 29.8584 12.2251L31.6667 15.5833"
        stroke={color || "#D9D9D9"}
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}