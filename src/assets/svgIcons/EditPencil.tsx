//Global import
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EditPencil = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#222"
      d="M13.992 2.806c-.018-.113-.198-1.132-.932-1.875-.736-.725-1.751-.905-1.865-.923a.626.626 0 0 0-.434.088c-.045.028-.709.446-2.019 1.562.674.24 1.545.655 2.252 1.35.709.699 1.132 1.557 1.375 2.224 1.095-1.288 1.507-1.94 1.534-1.985a.646.646 0 0 0 .09-.441ZM7.605 2.66a69.136 69.136 0 0 0-2.388 2.282C1.36 8.798.347 10.34.306 10.403a.644.644 0 0 0-.101.3L.002 13.31a.644.644 0 0 0 .184.502c.12.12.282.188.45.188.017 0 .033 0 .05-.002l2.61-.202a.636.636 0 0 0 .294-.1c.064-.04 1.606-1.052 5.463-4.907.93-.93 1.698-1.74 2.326-2.432-.096-.416-.431-1.602-1.276-2.433-.856-.843-2.088-1.174-2.498-1.265Z"
    />
  </Svg>
);
export default EditPencil;
