import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const LeftArrow = (props: any) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M14.934 1.254c0 .332-.132.65-.366.884L8.174 8.53a2.083 2.083 0 0 0 0 2.946l6.385 6.386a1.25 1.25 0 0 1-1.767 1.767l-6.385-6.38a4.588 4.588 0 0 1 0-6.482L12.8.37a1.25 1.25 0 0 1 2.134.884Z"
    />
  </Svg>
)
export default LeftArrow