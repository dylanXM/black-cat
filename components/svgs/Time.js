import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTime = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="m21.2 21.6-1.9 1.9-5.6-5.5V7.6h2.7v9.2zm9-5.3c0 7.8-6.3 14.2-14.2 14.2S1.8 24.2 1.8 16.3C1.8 8.5 8.2 2.2 16 2.1c7.8.1 14.2 6.4 14.2 14.2m-2.7 0C27.5 10 22.3 4.9 16 4.9S4.5 10 4.5 16.3 9.6 27.8 16 27.8c6.3 0 11.5-5.1 11.5-11.5"
      className="time_svg__st0"
    />
  </Svg>
);
export default SvgTime;
