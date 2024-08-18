import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   {/*renders the Layout component.*/}
          <Route index element={<Home />} />    {/* does not have a path but has an index attribute. this route as the default route for the parent route, which is /. */}
          <Route path="blogs" element={<Blogs />} /> {/* blogs path is combined with the parent and becomes /blogs. */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> {/* will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);