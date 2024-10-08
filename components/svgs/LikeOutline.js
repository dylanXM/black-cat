import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLikeOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M22 4c-2.3 0-4.5 1.1-6 2.8C14.5 5.1 12.3 4 10 4c-4.1 0-7.3 3.2-7.3 7.3 0 5 4.5 9.1 11.4 15.4l1.9 1.7 1.9-1.8c6.9-6.2 11.4-10.3 11.4-15.4 0-4-3.2-7.2-7.3-7.2m-5.9 20.7-.1.2-.1-.1C9.5 19 5.3 15.2 5.3 11.3c0-2.7 2-4.7 4.7-4.7 2.1 0 4.1 1.3 4.8 3.1h2.5c.6-1.7 2.6-3 4.7-3 2.7 0 4.7 2 4.7 4.7 0 3.8-4.2 7.6-10.6 13.3" />
  </Svg>
);
export default SvgLikeOutline;
