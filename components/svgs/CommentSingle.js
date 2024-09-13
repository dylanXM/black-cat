import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCommentSingle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M18.31 14.19A2.31 2.31 0 1 1 16 11.88a2.31 2.31 0 0 1 2.31 2.31m-9.55-2.31a2.31 2.31 0 1 0 2.31 2.31 2.31 2.31 0 0 0-2.31-2.31m14.49 0a2.31 2.31 0 1 0 2.31 2.31 2.31 2.31 0 0 0-2.31-2.31M31 14.19c0 7.27-6.72 13.18-15 13.18-.49 0-1 0-1.54-.08l-8 4v-7A12.55 12.55 0 0 1 1 14.19C1 6.92 7.73 1 16 1s15 5.92 15 13.19m-2.81 0C28.18 8.47 22.72 3.82 16 3.82S3.82 8.47 3.82 14.19A10 10 0 0 0 9 22.62l.24.15V27l4.5-2.25a.37.37 0 0 1 .18-.09H16c6.72-.1 12.18-4.75 12.18-10.47Z"
      style={{
        fill: "#231f20",
      }}
    />
  </Svg>
);
export default SvgCommentSingle;
