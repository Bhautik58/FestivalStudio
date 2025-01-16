//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BlackSearch = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#222"
        d="m15.805 14.862-3.98-3.98a6.677 6.677 0 1 0-.942.943l3.979 3.98a.667.667 0 0 0 .943-.943ZM6.667 12A5.334 5.334 0 1 1 12 6.667 5.34 5.34 0 0 1 6.667 12Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default BlackSearch
