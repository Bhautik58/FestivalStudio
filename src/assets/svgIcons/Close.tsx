//Global imports
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Close = (props:any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#222"
            d="M15 5a.833.833 0 0 0-1.178 0L10 8.822 6.178 5A.833.833 0 0 0 5 6.178L8.822 10 5 13.822A.833.833 0 0 0 6.178 15L10 11.178 13.822 15A.834.834 0 0 0 15 13.822L11.178 10 15 6.178A.833.833 0 0 0 15 5Z"
        />
    </Svg>
)
export default Close
