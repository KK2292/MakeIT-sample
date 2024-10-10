/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const FirstView = () => {
  const tentativeStyle = css`
    height: 100vh;
    width: 100%;
    color: #fff;
  `;
  const h1Style = css`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 128px;
    transform: translate(-50%, -50%);
  `;

  return (
    <div css={tentativeStyle}>
      <h1 css={h1Style}>ファーストビューとりあえず画面幅いっぱい仮</h1>
    </div>
  );
};
