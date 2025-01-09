import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SmsBox = (props :any) => (
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
        d="M15.833.833H4.167A4.172 4.172 0 0 0 0 5v10a4.172 4.172 0 0 0 4.167 4.167h11.666A4.172 4.172 0 0 0 20 15V5A4.172 4.172 0 0 0 15.833.833ZM4.167 2.5h11.666a2.5 2.5 0 0 1 2.317 1.572l-6.382 6.383a2.506 2.506 0 0 1-3.536 0L1.85 4.072A2.5 2.5 0 0 1 4.167 2.5Zm11.666 15H4.167a2.5 2.5 0 0 1-2.5-2.5V6.25l5.386 5.383a4.173 4.173 0 0 0 5.894 0l5.386-5.383V15a2.5 2.5 0 0 1-2.5 2.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SmsBox
