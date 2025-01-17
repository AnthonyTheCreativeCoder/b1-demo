// import React, { lazy, Suspense, useEffect } from "react";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./styles/common-style.css";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CustomCursor from "./components/common/ui-snippets/CustomCursor";
// import ScrollToTop from "./components/common/adjustments/ScrollToTop";
// import { AnimatePresence, motion } from "framer-motion";
// import ImageGrid from "./components/pages/ImageGrid";
// import PageContent from "./components/pages/PageContent";
// import About from "./components/pages/About";
// import ServiceDetails from "./components/pages/ServiceDetails";
// import Contact from "./components/pages/Contact";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import useHeaderFooter from "./hooks/react-query/useHeaderFooter";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const HomePage = lazy(() => import("./components/pages/home"));
// const WorkPage = lazy(() => import("./components/pages/work"));
// const WorkDetailsPage = lazy(() => import("./components/pages/workDetails"));
// const Service = lazy(() => import("./components/pages/Service"));
// const queryClient = new QueryClient();

// function App() {
//   const environment = process.env["NODE_ENV"];

//   useEffect(() => {
//     if (!AOS.isInitialized) {
//       AOS.init({
//         duration: 1000,
//         easing: "ease-in-out",
//       });
//       AOS.isInitialized = true;
//     }
//   }, []);

//   return (
//     <div className="App">
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <ScrollToTop />
//           <Suspense fallback={<div className="loading-indicator">Loading...</div>}>
//             <AppContent />
//           </Suspense>
//           {environment === "development" && <ReactQueryDevtools />}
//         </Router>
//       </QueryClientProvider>
//     </div>
//   );
// }

// function AppContent() {
//   const location = useLocation();
//   const { data, error, isFetching } = useHeaderFooter();

//   return (
//     <div>
//       <Header
//         header={{
//           menu_items: isFetching ? [] : data?.header_menu_items,
//           logo: isFetching ? "loading-logo.svg" : data?.logo_url,
//         }}
//         err={error}
//       />
//       <main id="main">
       
//             <Routes location={location}>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/works" element={<WorkPage />} />
//               <Route path="/works/:id" element={<WorkDetailsPage />} />
//               <Route path="/service-details" element={<ServiceDetails />} />
//               <Route path="/services" element={<Service />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/imagegrid" element={<ImageGrid />} />
//               <Route path="/content" element={<PageContent />} />
//             </Routes>
         
//       </main>
//       <Footer footer={data?.footer_menu_items} err={error} />
//       <CustomCursor />
//     </div>
//   );
// }

// export default App;


import React, { lazy, Suspense, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/common-style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./components/common/ui-snippets/CustomCursor";
import ScrollToTop from "./components/common/adjustments/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ImageGrid from "./components/pages/ImageGrid";
import PageContent from "./components/pages/PageContent";
import About from "./components/pages/About";
import ProjectContent from "./components/pages/ProjectContent";
import ServiceDetails from "./components/pages/ServiceDetails";
import Contact from "./components/pages/Contact";
import useHeaderFooter from "./hooks/react-query/useHeaderFooter";
import Logo from "./assets/images/logo.png";

const HomePage = lazy(() => import("./components/pages/home"));
const WorkPage = lazy(() => import("./components/pages/work"));
const WorkDetailsPage = lazy(() => import("./components/pages/workDetails"));
const Service = lazy(() => import("./components/pages/Service"));
const queryClient = new QueryClient();

const LoadingIndicator = () => {
  return (
    <div className="loading-container">
      <img
        src={Logo} // Replace with the actual path to your loading image
        alt="Loading..."
        className="loading-image"
      />
      <p>Loading...</p>
    </div>
  );
};

function App() {
  const environment = process.env["NODE_ENV"];

  useEffect(() => {
    if (!AOS.isInitialized) {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
      });
      AOS.isInitialized = true;
    }
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingIndicator />}>
            <AppContent />
          </Suspense>
          {environment === "development" && <ReactQueryDevtools />}
        </Router>
      </QueryClientProvider>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const { data, error, isFetching } = useHeaderFooter();

  return (
    <div>
      <Header
        header={{
          menu_items: isFetching ? [] : data?.header_menu_items,
          logo: isFetching ? Logo : data?.logo_url,
        }}
        err={error}
      />
      <main id="main">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorkPage />} />
          <Route path="/works/:id" element={<WorkDetailsPage />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imagegrid" element={<ImageGrid />} />
          <Route path="/content" element={<PageContent />} />
          <Route path="/post-details/project/:projectId/" element={<ProjectContent />} />
          <Route path="/post-details/home/:projectId/" element={<ProjectContent />} />
          {/* <Route path="/content" element={<PageContent />} />
          <Route path="/content" element={<PageContent />} /> */}
        </Routes>
      </main>
      <Footer footer={data?.footer_menu_items} err={error} />
      <CustomCursor />
    </div>
  );
}

export default App;
