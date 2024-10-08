import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLike = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M22 4a8 8 0 0 0-6 2.79A8 8 0 0 0 10 4a7.26 7.26 0 0 0-7.33 7.33c0 5 4.53 9.15 11.4 15.39L16 28.47l1.93-1.76c6.87-6.23 11.4-10.33 11.4-15.37A7.26 7.26 0 0 0 22 4" />
  </Svg>
);
export default SvgLike;
