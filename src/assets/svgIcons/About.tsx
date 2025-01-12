//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const About = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333A8.333 8.333 0 1 1 18.333 10 8.342 8.342 0 0 1 10 18.333Z" />
      <Path d="M10 8.333h-.833a.833.833 0 1 0 0 1.667H10v5a.833.833 0 1 0 1.667 0v-5A1.666 1.666 0 0 0 10 8.333ZM10 6.667a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default About
