//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Share = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M16.11 12.223a3.884 3.884 0 0 0-3.198 1.686L7.488 11.46c.385-.93.386-1.975.004-2.907l5.416-2.461a3.883 3.883 0 1 0-.689-2.203c.004.22.026.44.067.655L6.528 7.161a3.89 3.89 0 1 0-.013 5.689l5.773 2.607c-.04.215-.062.434-.066.654a3.89 3.89 0 1 0 3.889-3.889Zm0-10.556a2.222 2.222 0 1 1 .003 4.444 2.222 2.222 0 0 1-.002-4.444ZM3.89 12.223a2.222 2.222 0 1 1-.003-4.445 2.222 2.222 0 0 1 .002 4.445Zm12.22 6.11a2.223 2.223 0 1 1 .001-4.445 2.223 2.223 0 0 1 0 4.445Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Share
