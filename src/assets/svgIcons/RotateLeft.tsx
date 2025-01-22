//Global imports
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RotateLeft = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5 0a4.973 4.973 0 0 0-3.333 1.282V.417a.417.417 0 1 0-.834 0v1.666c0 .46.374.834.834.834h1.666a.417.417 0 1 0 0-.834H2.03A4.147 4.147 0 0 1 5 .833 4.171 4.171 0 0 1 9.167 5 4.171 4.171 0 0 1 5 9.167 4.143 4.143 0 0 1 .85 5.379a.417.417 0 0 0-.83.075A4.973 4.973 0 0 0 5 10c2.757 0 5-2.243 5-5S7.757 0 5 0Z"
    />
  </Svg>
)
export default RotateLeft
