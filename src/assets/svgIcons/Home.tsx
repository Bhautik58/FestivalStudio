//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Home = (props: any) => (
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
                d="m19.267 7.558-6.32-6.322a4.173 4.173 0 0 0-5.894 0L.733 7.558A2.482 2.482 0 0 0 0 9.325v8.18a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-8.18a2.481 2.481 0 0 0-.733-1.767ZM12.5 18.339h-5v-3.278a2.5 2.5 0 0 1 5 0v3.278Zm5.833-.833a.834.834 0 0 1-.833.833h-3.333v-3.278a4.167 4.167 0 0 0-8.334 0v3.278H2.5a.833.833 0 0 1-.833-.833V9.325a.84.84 0 0 1 .244-.59l6.32-6.318a2.507 2.507 0 0 1 3.537 0l6.321 6.321a.84.84 0 0 1 .244.587v8.18Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Home
