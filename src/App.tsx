import { css, Global } from "@emotion/react";
import "reset.css";
import { AppRouter } from "./routes/AppRouter";
import { Header } from "./components/molecules/Header";

export const App = () => {
  return (
    <>
      <Global
        //グローバルにcssを指定
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
          * {
            box-sizing: border-box;
          }

          body {
            font-family: "Noto Sans JP", sans-serif;
            background-color: #111;
          }
        `}
      />
      <Header />
      <AppRouter />
    </>
  );
};
