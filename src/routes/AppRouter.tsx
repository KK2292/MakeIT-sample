import { Route, Routes } from "react-router-dom";
import { Top } from "../pages/Top";
import { Page404 } from "../pages/Page404";
import { Blog } from "../pages/Blog";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};
