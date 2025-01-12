//Global imports
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Privacy = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m10 .833 6.848 1.522c.38.085.652.422.652.813v8.323a5 5 0 0 1-2.227 4.16L10 19.167 4.727 15.65A4.998 4.998 0 0 1 2.5 11.49V3.169c0-.39.272-.728.652-.813L10 .833Zm0 1.708L4.167 3.837v7.654c0 1.114.556 2.155 1.484 2.773l4.349 2.9 4.35-2.9a3.331 3.331 0 0 0 1.483-2.772V3.837L10 2.542V2.54Zm3.71 4.31 1.18 1.179-5.304 5.303L6.05 9.797 7.228 8.62l2.357 2.357L13.71 6.85Z"
    />
  </Svg>
)
export default Privacy
