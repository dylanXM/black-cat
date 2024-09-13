import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCross = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M30 5.33 27.17 2.5 16 13.67 4.83 2.5 2 5.33 13.17 16.5 2 27.67l2.83 2.83L16 19.33 27.17 30.5 30 27.67 18.83 16.5z" />
  </Svg>
);
export default SvgCross;
