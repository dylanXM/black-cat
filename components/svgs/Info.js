import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M16 2.67A13.33 13.33 0 1 0 29.33 16 13.34 13.34 0 0 0 16 2.67m1.33 20h-2.66v-8h2.67v8Zm0-10.67h-2.66V9.33h2.67V12Z" />
  </Svg>
);
export default SvgInfo;
