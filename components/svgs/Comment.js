import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComment = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M30.9 16a10.9 10.9 0 0 1-4.53 8.71v6.51l-5.87-4.11a12 12 0 0 1-1.75.15A12.77 12.77 0 0 1 12 25.37l-1.15-.72a15 15 0 0 0 1.65.1 15 15 0 0 0 1.6-.09c6.92-.72 12.32-6 12.32-12.5a11.4 11.4 0 0 0-.13-1.62 11.7 11.7 0 0 0-1.53-4.33l.59.35A11.05 11.05 0 0 1 30.9 16m-6.21-4c0-6-5.3-10.93-11.82-10.93h-.75C6 1.47 1.06 6.21 1.06 12a10.44 10.44 0 0 0 3.7 7.91v5.86l2.69-1.89 2.07-1.45a12.4 12.4 0 0 0 3.36.5C19.39 22.94 24.69 18 24.69 12"
      className="comment_svg__cls-1"
    />
  </Svg>
);
export default SvgComment;
