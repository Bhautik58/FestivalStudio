//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PlusIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M21.563 10.063h-8.625V1.437a1.438 1.438 0 0 0-2.876 0v8.626H1.438a1.438 1.438 0 0 0 0 2.874h8.624v8.626a1.438 1.438 0 0 0 2.876 0v-8.625h8.624a1.438 1.438 0 0 0 0-2.876Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h23v23H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PlusIcon
