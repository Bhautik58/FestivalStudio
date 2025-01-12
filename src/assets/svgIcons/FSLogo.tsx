//Global imports
import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const FsLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={63}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M.93 39.535c0-.128.043-.237.128-.326a.45.45 0 0 1 .33-.134h3.37c0 .301-.05.521-.15.66-.095.14-.248.21-.457.21H1.829v1.554h2.03c0 .3-.05.52-.15.66-.095.14-.247.209-.457.209H1.829v1.888c0 .262-.072.452-.217.569-.14.116-.367.175-.681.175v-5.465ZM5.999 45c-.305 0-.584-.067-.839-.2a1.532 1.532 0 0 1-.591-.552 1.52 1.52 0 0 1-.217-.802v-1.154c0-.306.074-.582.224-.827.15-.245.352-.437.607-.576.254-.145.529-.218.824-.218.294 0 .561.067.8.2.245.135.438.324.577.57.145.239.218.509.218.81v.493a.395.395 0 0 1-.113.284.378.378 0 0 1-.284.117H5.168v.242c0 .257.07.463.21.619.144.156.354.234.628.234.27 0 .472-.065.607-.193a.709.709 0 0 0 .202-.526.795.795 0 0 1 .135-.008c.17 0 .305.044.404.133a.433.433 0 0 1 .158.36.736.736 0 0 1-.203.484c-.134.15-.319.273-.554.368-.23.095-.481.142-.756.142Zm.831-2.549v-.2c0-.251-.077-.452-.232-.602-.15-.156-.35-.234-.599-.234a.817.817 0 0 0-.607.234c-.15.15-.224.351-.224.602v.2H6.83ZM9.843 45c-.455 0-.829-.097-1.123-.292-.29-.195-.435-.454-.435-.778 0-.3.19-.46.57-.476.044.267.154.47.329.61.175.134.387.2.636.2.27 0 .48-.038.63-.116a.399.399 0 0 0 .224-.368.423.423 0 0 0-.195-.368c-.124-.094-.367-.19-.726-.284a4.406 4.406 0 0 1-.839-.284c-.204-.1-.36-.228-.464-.384-.1-.156-.15-.363-.15-.619 0-.345.132-.627.397-.844.27-.217.63-.326 1.078-.326.435 0 .8.09 1.094.268.294.178.441.415.441.71 0 .145-.05.254-.15.326-.094.072-.241.111-.441.117-.08-.474-.382-.71-.906-.71a.99.99 0 0 0-.517.125c-.135.084-.202.192-.202.326 0 .14.06.248.18.326.124.072.332.142.621.209.55.128.949.3 1.198.518.25.217.375.515.375.894 0 .373-.145.671-.435.894-.29.217-.686.326-1.19.326ZM13.555 45c-.389 0-.678-.125-.868-.376-.185-.25-.277-.574-.277-.97v-2.197h-.75c0-.24.043-.418.128-.535a.404.404 0 0 1 .345-.175h.284v-.727c0-.212.068-.365.202-.46.14-.095.347-.142.622-.142v1.328h.996c0 .251-.045.432-.135.544-.09.111-.232.167-.427.167h-.427v2.164c0 .2.035.346.105.435.07.083.193.125.367.125a.968.968 0 0 0 .517-.159c.045.045.077.1.097.167a.592.592 0 0 1 .038.21c0 .155-.073.295-.217.417-.145.123-.345.184-.6.184ZM15.68 40.195a.555.555 0 0 1-.412-.167.611.611 0 0 1-.165-.435c0-.172.055-.314.165-.426a.555.555 0 0 1 .411-.167c.165 0 .303.056.412.167.11.112.165.254.165.426a.61.61 0 0 1-.165.435.555.555 0 0 1-.412.167Zm-.42 1.078c0-.212.07-.365.21-.46.14-.094.35-.142.629-.142v3.727c0 .212-.07.365-.21.46-.14.095-.35.142-.629.142v-3.727ZM18.659 45a.472.472 0 0 1-.277-.084.481.481 0 0 1-.165-.225l-1.378-3.945a.436.436 0 0 1 .165-.05.913.913 0 0 1 .195-.025.7.7 0 0 1 .36.092c.109.062.181.153.216.276l.839 2.74-.112.369.052.025.989-3.134a.488.488 0 0 1 .21-.276.7.7 0 0 1 .359-.092c.06 0 .127.009.202.025.075.012.13.028.165.05L19.1 44.691a.463.463 0 0 1-.442.309ZM22.087 45c-.265 0-.505-.056-.72-.167a1.25 1.25 0 0 1-.509-.485 1.437 1.437 0 0 1-.187-.743c0-.29.065-.54.195-.753.135-.217.317-.381.547-.493.23-.117.486-.175.77-.175.455 0 .837.172 1.146.518l.038-.042c-.09-.1-.162-.172-.217-.217v-.234c0-.245-.075-.437-.225-.577-.15-.145-.36-.217-.629-.217-.24 0-.45.053-.629.159-.18.1-.324.25-.434.451a.623.623 0 0 1-.255-.184.428.428 0 0 1-.097-.267.64.64 0 0 1 .202-.451c.135-.14.315-.248.54-.326a2.15 2.15 0 0 1 .74-.126c.51 0 .904.137 1.184.41.284.267.427.635.427 1.103v2.164c0 .229-.063.396-.188.502-.125.1-.324.15-.599.15v-.36c.09-.1.15-.172.18-.217l-.038-.033c-.16.2-.339.354-.539.46-.194.1-.429.15-.703.15Zm.194-.702c.275 0 .49-.061.644-.184a.615.615 0 0 0 .24-.518.615.615 0 0 0-.24-.518c-.155-.128-.367-.192-.636-.192-.245 0-.44.064-.584.192-.14.123-.21.295-.21.518 0 .229.07.404.21.527.14.117.332.175.576.175ZM26.056 45c-.4 0-.7-.125-.899-.376-.2-.25-.3-.574-.3-.97v-4.052c0-.212.068-.365.203-.46.14-.095.352-.142.636-.142v4.621c0 .2.038.346.113.435.08.083.207.125.382.125a.942.942 0 0 0 .531-.159c.045.045.08.103.105.176a.57.57 0 0 1 .037.2c0 .156-.072.296-.217.418-.14.123-.337.184-.591.184ZM31.486 45c-.439 0-.82-.064-1.145-.192-.325-.128-.574-.304-.75-.527a1.234 1.234 0 0 1-.254-.768c0-.452.255-.677.764-.677.01.44.135.774.375 1.002.244.229.586.343 1.025.343.385 0 .682-.072.891-.217.21-.145.315-.354.315-.627a.676.676 0 0 0-.12-.418c-.08-.111-.215-.209-.404-.292a4.696 4.696 0 0 0-.824-.268c-.48-.117-.859-.253-1.138-.41-.275-.155-.474-.342-.6-.559-.124-.217-.186-.487-.186-.81 0-.313.082-.588.247-.828.164-.24.397-.423.696-.551.3-.134.647-.201 1.041-.201.374 0 .711.059 1.01.175.3.112.535.27.705.477.17.206.254.443.254.71 0 .384-.242.585-.726.602-.04-.401-.16-.694-.36-.878-.194-.183-.489-.275-.883-.275-.35 0-.619.066-.809.2a.654.654 0 0 0-.284.568c0 .167.035.307.104.418.075.106.198.2.367.284.17.078.415.156.734.234.51.129.914.273 1.213.435.3.156.515.345.644.568.135.217.203.49.203.819 0 .34-.088.635-.263.886-.17.25-.414.443-.733.576-.315.134-.684.201-1.109.201ZM35.874 45c-.39 0-.679-.125-.868-.376-.185-.25-.278-.574-.278-.97v-2.197h-.748c0-.24.042-.418.127-.535a.404.404 0 0 1 .344-.175h.285v-.727c0-.212.067-.365.202-.46.14-.095.347-.142.622-.142v1.328h.996c0 .251-.045.432-.135.544-.09.111-.232.167-.427.167h-.427v2.164c0 .2.035.346.105.435.07.083.192.125.367.125a.967.967 0 0 0 .517-.159c.045.045.077.1.097.167a.592.592 0 0 1 .037.21c0 .155-.072.295-.217.417-.145.123-.344.184-.599.184ZM40.664 44.256c0 .24-.067.424-.202.552-.13.128-.33.192-.6.192v-.518c.046-.061.103-.145.173-.25l-.045-.034c-.15.25-.334.448-.554.593-.215.14-.46.209-.734.209-.26 0-.494-.064-.704-.192a1.369 1.369 0 0 1-.479-.543 1.777 1.777 0 0 1-.172-.794v-2.198c0-.212.067-.365.202-.46.14-.094.354-.142.644-.142v2.741c0 .24.062.43.187.569.125.133.31.2.554.2.265 0 .48-.09.644-.267a.947.947 0 0 0 .247-.669v-1.972c0-.212.068-.365.203-.46.14-.094.352-.142.636-.142v3.585ZM42.975 45c-.275 0-.522-.061-.741-.184a1.396 1.396 0 0 1-.51-.526 1.647 1.647 0 0 1-.18-.777V42.15c0-.29.066-.545.195-.768.13-.223.307-.396.532-.518.23-.129.49-.193.779-.193.2 0 .4.048.599.142.2.09.37.215.51.376l.022-.041a1.217 1.217 0 0 0-.158-.176V39.66c0-.211.07-.373.21-.484.14-.117.352-.176.637-.176v5.323c0 .2-.063.365-.188.493-.125.123-.322.184-.591.184v-.46a1.6 1.6 0 0 0 .142-.225l-.03-.034c-.16.234-.335.413-.524.535-.185.123-.42.184-.704.184Zm.232-.819c.24 0 .437-.064.592-.192a.627.627 0 0 0 .232-.493v-1.329a.61.61 0 0 0-.225-.485c-.15-.133-.35-.2-.599-.2-.264 0-.47.064-.614.192-.14.128-.21.306-.21.535v1.245c0 .234.07.415.21.543.145.123.35.184.614.184ZM46.386 40.195a.555.555 0 0 1-.412-.167.61.61 0 0 1-.165-.435c0-.172.055-.314.165-.426a.555.555 0 0 1 .412-.167c.165 0 .302.056.412.167.11.112.165.254.165.426a.61.61 0 0 1-.165.435.555.555 0 0 1-.412.167Zm-.42 1.078c0-.212.07-.365.21-.46.14-.094.35-.142.63-.142v3.727c0 .212-.07.365-.21.46-.14.095-.35.142-.63.142v-3.727ZM49.238 45c-.32 0-.609-.064-.868-.192a1.6 1.6 0 0 1-.607-.543 1.42 1.42 0 0 1-.217-.778v-1.236c0-.296.072-.563.217-.802a1.56 1.56 0 0 1 .6-.569c.259-.14.55-.209.875-.209.325 0 .614.07.869.21a1.52 1.52 0 0 1 .824 1.37v1.236c0 .29-.075.55-.225.778-.145.228-.347.41-.607.543a1.89 1.89 0 0 1-.86.192Zm0-.81c.265 0 .474-.067.63-.201a.716.716 0 0 0 .231-.56v-1.137a.79.79 0 0 0-.232-.593c-.154-.15-.364-.225-.629-.225-.264 0-.474.075-.629.225a.79.79 0 0 0-.232.593v1.137c0 .234.077.42.232.56.155.134.365.2.63.2Z"
    />
    <Path
      fill="url(#a)"
      d="M27.873 21.608H15.632l1.83-5.315h7.677a11.177 11.177 0 0 0 2.437 4.995c.096.11.195.215.297.32Z"
    />
    <Path
      fill="url(#b)"
      d="M53.379 24.218a5.48 5.48 0 0 1-.055 1.078 8.84 8.84 0 0 1-.097 1.273c-.626 4.174-4.289 9.058-11.456 9.058h-30.04a8.402 8.402 0 0 1 7.801-5.279h21.699a5.063 5.063 0 0 0 3.542-1.455c1.028-.965 2.213-2.856 1.869-4.901-.26-1.533-1.2-2.084-3.12-2.28-.893-.09-1.999-.104-3.344-.104l-5.358-.009c-4.166 0-6.18-2.607-6.941-5.716a15.31 15.31 0 0 1-.248-5.43l.008-.108c.151-.834.378-1.652.678-2.445h8.063a5.587 5.587 0 0 0-1.266 3.815c.058 1.312.577 3.316 2.305 4.168a4.225 4.225 0 0 0 1.899.41l5.358.009c5.789 0 8.703 2.582 8.703 7.916Z"
    />
    <Path
      fill="url(#c)"
      d="M53.227 26.57c-.626 4.173-4.289 9.057-11.456 9.057h-7.648l.16-5.278h6.948a5.062 5.062 0 0 0 3.542-1.456c1.028-.965 2.213-2.855 1.869-4.9-.26-1.533-1.2-2.085-3.12-2.28h.002s6.36-.877 9.703 4.857Z"
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <Path
      fill="url(#d)"
      d="M62.174 0a7.676 7.676 0 0 1-.344.747 8.448 8.448 0 0 1-7.506 4.567H21.908c-2.067 0-3.104 1.109-4.416 3.289a31.85 31.85 0 0 0-1.767 3.823l-1.48 3.867-1.747 5.315-4.772 14.02H0l8.5-24.936c1.114-3.283 2.51-5.816 4.166-7.572.005-.002.008-.008.014-.013a10.394 10.394 0 0 1 1.204-1.1c.19-.152.383-.292.582-.422a9.72 9.72 0 0 1 .64-.389A9.103 9.103 0 0 1 19.501 0h42.672Z"
    />
    <Path
      fill="url(#e)"
      d="M62.174 0a7.676 7.676 0 0 1-.344.747H18.722a9.103 9.103 0 0 0-4.397 1.196 9.564 9.564 0 0 0-1.645 1.164 10.39 10.39 0 0 1 1.204-1.1c.19-.152.383-.29.582-.422a9.72 9.72 0 0 1 .64-.389A9.103 9.103 0 0 1 19.501 0h42.672Z"
      opacity={0.7}
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Path
      fill="url(#f)"
      d="M21.908 5.315c-2.067 0-3.104 1.108-4.416 3.288a31.841 31.841 0 0 0-1.766 3.823l-1.48 3.867-1.748 5.315-4.772 14.02H0l8.5-24.936c4.012-5.744 13.408-5.377 13.408-5.377Z"
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <Path
      fill="url(#g)"
      d="M37.419 15.883h-4.987a4.823 4.823 0 0 1-4.801-5.43l.008-.108c.151-.834.378-1.652.678-2.445h8.063a5.587 5.587 0 0 0-1.266 3.815c.058 1.312.577 3.316 2.305 4.168Z"
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <Path
      fill="url(#h)"
      d="M24.413 17.18c.389 1.726 1.7 3.288 3.46 4.428a8.114 8.114 0 0 1-.297-.32 11.177 11.177 0 0 1-2.437-4.995h-7.677l-.305.887h7.256Z"
      opacity={0.7}
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.632}
        x2={27.873}
        y1={18.951}
        y2={18.951}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#641CF5" />
        <Stop offset={1} stopColor="#C581D6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={41.484}
        x2={29.857}
        y1={9.058}
        y2={37.974}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFB445" />
        <Stop offset={1} stopColor="#FF307E" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={43.424}
        x2={45.341}
        y1={29.857}
        y2={22.304}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.004} stopColor="#fff" stopOpacity={0} />
        <Stop offset={1} stopColor="#CD2440" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={28.476}
        x2={36.887}
        y1={27.617}
        y2={-3.961}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#641CF5" />
        <Stop offset={1} stopColor="#C581D6" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={36.956}
        x2={39.168}
        y1={0.141}
        y2={6.775}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.996} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={10.723}
        x2={10.965}
        y1={5.475}
        y2={21.163}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4E5776" />
        <Stop offset={0.996} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={33.1}
        x2={31.734}
        y1={10.929}
        y2={15.907}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.004} stopColor="#fff" stopOpacity={0} />
        <Stop offset={1} stopColor="#CD2440" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={23.604}
        x2={21.974}
        y1={14.931}
        y2={21.61}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.996} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FsLogo;