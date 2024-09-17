import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNoActivity = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M16 32A16 16 0 0 1 2.17 8 16 16 0 0 1 3.5 6 16 16 0 1 1 16 32m14-16a14 14 0 0 0-.16-1.85A13.5 13.5 0 0 0 28 14a13.86 13.86 0 0 0-6.23 1.52 24 24 0 0 1 4.64 9.75A13.9 13.9 0 0 0 30 16m-5.3 10.91a22.3 22.3 0 0 0-4.64-10.41A14 14 0 0 0 14 28a14 14 0 0 0 .15 1.84A14 14 0 0 0 16 30a13.87 13.87 0 0 0 8.7-3.09M12.11 29.4c0-.46-.09-.93-.09-1.4a16 16 0 0 1 6.72-13A23 23 0 0 0 17 13.33 16 16 0 0 1 4 20c-.47 0-.92 0-1.38-.09a14 14 0 0 0 9.49 9.49M4.47 8.09A13.9 13.9 0 0 0 2 16a14 14 0 0 0 .19 1.86A13.5 13.5 0 0 0 4 18a14 14 0 0 0 11.39-5.91 22.3 22.3 0 0 0-10.92-4m13.4-5.91A14 14 0 0 0 16 2 13.94 13.94 0 0 0 6 6.28a24.4 24.4 0 0 1 10.45 4.09A13.85 13.85 0 0 0 18 4a14 14 0 0 0-.12-1.81Zm2.06.44c.07.46.07.91.07 1.38a15.9 15.9 0 0 1-2 7.68 25 25 0 0 1 2.36 2.24A15.9 15.9 0 0 1 28 12c.47 0 .94 0 1.4.09a14 14 0 0 0-9.47-9.47"
      style={{
        fillRule: "evenodd",
      }}
      transform="translate(-.02)"
    />
  </Svg>
);
export default SvgNoActivity;
