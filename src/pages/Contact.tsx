/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    // コンポーネントがマウントされたときに背景色を変更
    const bodyStyle = document.body.style;
    bodyStyle.background = "radial-gradient(#0A1121, #13203E)";
    bodyStyle.height = "100vh";

    // コンポーネントがアンマウントされたときに背景色を元に戻す
    return () => {
      bodyStyle.background = "";
      bodyStyle.height = "";
    };
  }, []);

  const tentativeStyle = css`
    color: #ddd;
    font-size: 40px;
    transform: translateY(300px);
  `;
  return (
    <>
      <p css={tentativeStyle}>Contact</p>
    </>
  );
};
