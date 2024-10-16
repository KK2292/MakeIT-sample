import { Route, Routes } from "react-router-dom";
import { Page404 } from "../common/container/Page404";
import { Team } from "../features/team/container/Team";
import { Contact } from "../features/contact/container/Contact";
import { Blog } from "../features/blog/container/Blog";
import { Top } from "../features/top/container/Top";

export const AppRouter = () => {
  return (
    //urlのエンドポイント(/に続く子階層の部分)に応じたルーティング(ページ遷移)
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Page404 />} />
      {/* 上記のどのパスにもマッチしない場合はPage404コンポーネントを表示
      ("*"は「すべて」って意味です) */}
    </Routes>
  );
};
