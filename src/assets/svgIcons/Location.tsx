import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Location = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M10 5a3.333 3.333 0 1 0 0 6.667A3.333 3.333 0 0 0 10 5Zm0 5a1.667 1.667 0 1 1 0-3.333A1.667 1.667 0 0 1 10 10Z" />
      <Path d="M10 20a4.392 4.392 0 0 1-3.592-1.833c-3.176-4.381-4.787-7.675-4.787-9.79a8.38 8.38 0 1 1 16.758 0c0 2.115-1.61 5.409-4.787 9.79A4.391 4.391 0 0 1 10 20Zm0-18.183A6.57 6.57 0 0 0 3.438 8.38c0 1.675 1.578 4.773 4.441 8.722a2.62 2.62 0 0 0 4.242 0c2.863-3.95 4.44-7.047 4.44-8.722A6.57 6.57 0 0 0 10 1.818Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Location
