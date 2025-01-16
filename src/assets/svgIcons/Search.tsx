//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Search = (props:any) => (
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
        d="m19.756 18.578-4.974-4.975a8.346 8.346 0 1 0-1.179 1.179l4.975 4.974a.833.833 0 0 0 1.178-1.178ZM8.333 15A6.667 6.667 0 1 1 15 8.333 6.674 6.674 0 0 1 8.333 15Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Search;
