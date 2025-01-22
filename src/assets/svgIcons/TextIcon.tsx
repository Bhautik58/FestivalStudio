//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const TextIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.fill ?? "#fff"}
        d="M15.833 0H4.167A4.172 4.172 0 0 0 0 4.167v11.666A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833V4.167A4.172 4.172 0 0 0 15.833 0Zm2.5 15.833a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v11.666ZM15 7.5a.833.833 0 0 1-1.667 0 .834.834 0 0 0-.833-.833h-1.667v6.666h.834a.833.833 0 0 1 0 1.667H8.333a.833.833 0 1 1 0-1.667h.834V6.667H7.5a.833.833 0 0 0-.833.833A.833.833 0 0 1 5 7.5 2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default TextIcon
