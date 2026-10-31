import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout, { PageLoader } from "./components/Layout.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Stub = lazy(() => import("./pages/Stub.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));

function NotFound() {
  return <Stub title="Page not found" />;
}

function LazyRoute({ component: Component }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LazyRoute component={Home} />} />
        <Route path="about" element={<LazyRoute component={About} />} />
        <Route path="services" element={<LazyRoute component={Services} />} />
        <Route
          path="services/:slug"
          element={<LazyRoute component={ServicePage} />}
        />
        <Route path="blog" element={<LazyRoute component={Blog} />} />
        <Route path="blog/:slug" element={<LazyRoute component={BlogPost} />} />
        <Route path="gallery" element={<LazyRoute component={Gallery} />} />
        <Route path="contact" element={<LazyRoute component={Contact} />} />
        <Route
          path="*"
          element={<LazyRoute component={NotFound} />}
        />
      </Route>
    </Routes>
  );
}
