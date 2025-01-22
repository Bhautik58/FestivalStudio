//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Rotate = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M5 .833a4.18 4.18 0 0 1 2.967 1.25h-1.3a.417.417 0 1 0 0 .834h1.726a.774.774 0 0 0 .774-.774V.417a.417.417 0 1 0-.834 0v.866A4.992 4.992 0 0 0 .021 4.542.42.42 0 0 0 .438 5a.41.41 0 0 0 .412-.366A4.172 4.172 0 0 1 5 .834ZM9.563 5a.41.41 0 0 0-.412.366 4.16 4.16 0 0 1-7.118 2.55h1.3a.417.417 0 0 0 0-.833H1.607a.773.773 0 0 0-.774.773V9.583a.417.417 0 1 0 .834 0v-.866a4.992 4.992 0 0 0 8.312-3.259A.42.42 0 0 0 9.563 5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Rotate
