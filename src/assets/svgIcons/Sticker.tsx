//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Sticker = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.fill ?? "#fff"}
        d="M5.833 7.917c.033-2.742 2.468-2.742 2.5 0-.032 2.741-2.467 2.741-2.5 0ZM12.917 10c1.636-.023 1.636-4.144 0-4.167-1.637.023-1.637 4.144 0 4.167ZM20 10a10.011 10.011 0 0 1-10 10C-3.25 19.5-3.244.5 10 0a10.01 10.01 0 0 1 10 10Zm-1.667 0A8.342 8.342 0 0 0 10 1.667c-11.04.416-11.037 16.25 0 16.666A8.342 8.342 0 0 0 18.333 10Zm-4.342 1.687A12.832 12.832 0 0 1 10 12.5a12.836 12.836 0 0 1-4-.813.833.833 0 0 0-.877 1.265A5.697 5.697 0 0 0 10 15.833a5.69 5.69 0 0 0 4.868-2.881.833.833 0 0 0-.877-1.265Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Sticker
