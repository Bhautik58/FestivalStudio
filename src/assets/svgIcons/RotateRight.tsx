//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const RotateRight = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M9.566 5a.41.41 0 0 0-.412.365 4.18 4.18 0 1 1-1.183-3.282h-1.3a.417.417 0 1 0 0 .834h1.725a.774.774 0 0 0 .774-.774V.417a.417.417 0 1 0-.833 0v.865a4.994 4.994 0 1 0 1.646 4.176A.42.42 0 0 0 9.566 5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default RotateRight
