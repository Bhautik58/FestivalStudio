//Global imports
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Profile = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M15.833 0H4.167A4.172 4.172 0 0 0 0 4.167v11.666A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833V4.167A4.172 4.172 0 0 0 15.833 0Zm-10 18.333V17.5a4.167 4.167 0 1 1 8.334 0v.833H5.833Zm12.5-2.5a2.5 2.5 0 0 1-2.5 2.5V17.5a5.833 5.833 0 1 0-11.666 0v.833a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v11.666Z" />
            <Path d="M10 3.333A3.333 3.333 0 1 0 10 10a3.333 3.333 0 0 0 0-6.667Zm0 5A1.667 1.667 0 1 1 10 5a1.667 1.667 0 0 1 0 3.333Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Profile
