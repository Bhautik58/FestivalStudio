//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Album = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M28.5 0h-21A7.509 7.509 0 0 0 0 7.5v21A7.509 7.509 0 0 0 7.5 36h21a7.51 7.51 0 0 0 7.5-7.5v-21A7.51 7.51 0 0 0 28.5 0Zm-21 3h21A4.5 4.5 0 0 1 33 7.5v21a4.426 4.426 0 0 1-.45 1.927L18.806 16.683a7.5 7.5 0 0 0-10.609 0L3 21.879V7.5A4.5 4.5 0 0 1 7.5 3Zm0 30A4.5 4.5 0 0 1 3 28.5v-2.379l7.317-7.317a4.499 4.499 0 0 1 6.366 0L30.427 32.55c-.6.294-1.259.447-1.927.45h-21Z" />
      <Path d="M24 15.75a5.25 5.25 0 1 0 0-10.499 5.25 5.25 0 0 0 0 10.499Zm0-7.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h46v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Album
