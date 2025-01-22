//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Layers = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M11.242 5.488 6 8.634.758 5.488a.5.5 0 1 0-.515.857l5.5 3.3a.5.5 0 0 0 .515 0l5.5-3.3a.5.5 0 1 0-.514-.857h-.002Z" />
      <Path d="M11.242 7.772 6 10.917.757 7.772a.5.5 0 0 0-.514.857l5.5 3.3a.5.5 0 0 0 .515 0l5.5-3.3a.5.5 0 1 0-.514-.857h-.002ZM6 7.387c-.27 0-.534-.074-.766-.213L.242 4.179a.5.5 0 0 1 0-.857L5.234.326a1.487 1.487 0 0 1 1.532 0l4.992 2.996a.5.5 0 0 1 0 .857L6.766 7.174A1.488 1.488 0 0 1 6 7.387ZM1.472 3.75 5.75 6.317a.487.487 0 0 0 .5 0l4.278-2.567L6.25 1.184a.487.487 0 0 0-.5 0L1.472 3.75Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Layers
