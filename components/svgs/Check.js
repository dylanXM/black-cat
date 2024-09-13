import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M31.34 10.06 12.68 29.22a1 1 0 0 1-1.43 0L.66 19.14a1 1 0 0 1 0-1.4L5 13.55a1 1 0 0 1 1.43 0L11.22 18 24.88 3.77a1 1 0 0 1 1.44 0l5 4.89a1 1 0 0 1 .02 1.4"
      style={{
        fillRule: "evenodd",
      }}
    />
  </Svg>
);
export default SvgCheck;
