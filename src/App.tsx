import "reset.css"; //ブラウザの差異を吸収するためのCSSリセット
import { AppRouter } from "./routes/AppRouter";
import { Header } from "./features/header/container/Header";

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
