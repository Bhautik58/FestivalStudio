import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ProfileUser = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <G fill="#2C74FF" clipPath="url(#a)">
      <Path d="M25 25a12.5 12.5 0 1 0-12.5-12.5A12.512 12.512 0 0 0 25 25Zm0-20.833a8.334 8.334 0 1 1 0 16.667 8.334 8.334 0 0 1 0-16.667ZM25 29.167a18.77 18.77 0 0 0-18.75 18.75 2.083 2.083 0 0 0 4.167 0 14.583 14.583 0 1 1 29.166 0 2.083 2.083 0 0 0 4.167 0A18.77 18.77 0 0 0 25 29.167Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ProfileUser
