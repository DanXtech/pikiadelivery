import React from "react";
import { Svg, Path } from "react-native-svg";

interface RatingIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export default function RatingIcon({ width, height, color }: RatingIconProps) {
    return (
        <Svg
            width={width || 32}
            height={height || 32}
            viewBox="0 0 34 34"
            fill="none"
        >
            <Path
                d="M19.4474 4.87923L21.9405 9.90656C22.2805 10.6064 23.187 11.2776 23.952 11.4062L28.4706 12.1631C31.3603 12.6487 32.0403 14.7625 29.958 16.8477L26.4451 20.3896C25.8501 20.9895 25.5244 22.1463 25.7084 22.9748L26.7142 27.3594C27.5074 30.8299 25.6801 32.1725 22.6347 30.3586L18.3993 27.8307C17.6344 27.3737 16.3737 27.3737 15.5945 27.8307L11.3592 30.3586C8.32788 32.1725 6.48643 30.8156 7.27968 27.3594L8.2854 22.9748C8.46954 22.1463 8.14375 20.9895 7.5488 20.3896L4.03587 16.8477C1.96776 14.7625 2.63352 12.6487 5.5232 12.1631L10.0419 11.4062C10.7926 11.2776 11.6992 10.6064 12.0391 9.90656L14.5322 4.87923C15.892 2.15134 18.1018 2.15134 19.4474 4.87923Z"
                stroke={color || "#D9D9D9"}
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}