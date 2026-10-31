import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Stub from "./pages/Stub.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import { services } from "./config/site.js";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Stub title="Page not found" />} />
      </Route>
    </Routes>
  );
}
