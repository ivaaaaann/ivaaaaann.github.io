import {css, Global} from "@emotion/react";
import emotionReset from "emotion-reset";

const style = css`
  ${emotionReset}
`;

const globalStyles = <Global styles={style} />;

export default globalStyles;
