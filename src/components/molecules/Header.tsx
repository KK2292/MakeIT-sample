/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HeaderNavButtons } from "./HeaderNavButtons";
import { ContactButton } from "../atoms/ContactButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const navigateToTop = () => {
    navigate("/");
  };

  const headerStyle = css`
    align-items: center;
    backdrop-filter: blur(10px); //背景をぼかす 境界を滑らかにしたい
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    height: 96px;
    padding: 0 80px;
    position: fixed;
    width: 100vw;
    z-index: 1;
  `;
  const logoStyle = css`
    color: #fff;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  `;
  const navStyle = css`
    align-items: center;
    display: flex;
    gap: 40px;
    justify-content: space-between;
  `;

  return (
    <header css={headerStyle}>
      <h1 css={logoStyle} onClick={navigateToTop}>
        MakeIT（仮ロゴ）
      </h1>
      <nav css={navStyle}>
        <HeaderNavButtons />
        <ContactButton />
      </nav>
    </header>
  );
};
