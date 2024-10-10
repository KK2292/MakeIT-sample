/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { AboutUs } from "../components/topSection/AboutUs";
import { Achivements } from "../components/topSection/Achivements";
import { Activity } from "../components/topSection/Activity";
import { FirstView } from "../components/topSection/FirstView";

export const Top = () => {
  const mainContentsStyle = css`
    display: flex;
    flex-direction: column;
    gap: 160px;
    padding: 160px;
  `;
  return (
    <>
      <FirstView />
      <div css={mainContentsStyle}>
        <AboutUs />
        <Achivements />
        <Activity />
      </div>
    </>
  );
};
