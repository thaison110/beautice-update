import Home from "~/pages/Home";
import About from "~/pages/About";
import Blog from "~/pages/Blog";
import Services from "~/pages/Services";
import Gallery from "~/pages/Gallery";
import Contact from "~/pages/Contact";
import Home1 from "~/pages/Home1";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/blog", component: Blog },
    { path: "/services", component: Services },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact },
    { path: "/home1", component: Home1 },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
