//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Calendar = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M15.833 1.667H15V.833a.833.833 0 1 0-1.667 0v.834H6.667V.833A.833.833 0 0 0 5 .833v.834h-.833A4.172 4.172 0 0 0 0 5.833v10A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833v-10a4.172 4.172 0 0 0-4.167-4.166ZM1.667 5.833a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v.834H1.667v-.834Zm14.166 12.5H4.167a2.5 2.5 0 0 1-2.5-2.5v-7.5h16.666v7.5a2.5 2.5 0 0 1-2.5 2.5Z" />
      <Path d="M10 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.833 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM14.167 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Calendar
