// import React, { lazy } from "react";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// // import { AnimatePresence } from "framer-motion";

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
// import { AnimatePresence } from "framer-motion";
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
// const queryCLient = new QueryClient();

// function App() {
//   const environment = process.env["NODE_ENV"];
//   return (
//     <div className="App">
//       <QueryClientProvider client={queryCLient}>
//         <Router>
//           <ScrollToTop />
//           <AppContent />
//           {/* Moved the content to a child component */}
//           {environment === "development" && <ReactQueryDevtools />}
//         </Router>
//       </QueryClientProvider>
//     </div>
//   );
// }

// function AppContent() {
//   const location = useLocation(); // Now inside Router context
//   const { data, error, } = useHeaderFooter();
//   AOS.init({
//     duration: 1000,
//     easing: "ease-in-out",
//      // delay: 0,
//   });
//   // useEffect(() => {
//   //   // Initialize AOS
//   //   // fetchHeaderAndFooter();
//   // }, []);

//   return (
//     <div>
//       <Header
//         header={{
//           menu_items: data?.header_menu_items,
//           logo: data?.logo_url,
//         }}
//         err={error}
//       />
//       <main id="main">
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/works" element={<WorkPage />} />
//             <Route path="/works/:id" element={<WorkDetailsPage />} />
//             <Route path="/service-details" element={<ServiceDetails />} />
//             <Route path="/services" element={<Service />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/imagegrid" element={<ImageGrid />} />
//             <Route path="/content" element={<PageContent />} />

//           </Routes>
//         </AnimatePresence>
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
import { AnimatePresence } from "framer-motion";
import ImageGrid from "./components/pages/ImageGrid";
import PageContent from "./components/pages/PageContent";
import About from "./components/pages/About";
import ServiceDetails from "./components/pages/ServiceDetails";
import Contact from "./components/pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useHeaderFooter from "./hooks/react-query/useHeaderFooter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const HomePage = lazy(() => import("./components/pages/home"));
const WorkPage = lazy(() => import("./components/pages/work"));
const WorkDetailsPage = lazy(() => import("./components/pages/workDetails"));
const Service = lazy(() => import("./components/pages/Service"));
const queryClient = new QueryClient();

function App() {
  const environment = process.env["NODE_ENV"];

  useEffect(() => {
    // Initialize AOS only once
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div></div>}>
            <AppContent />
          </Suspense>
          {environment === "development" && <ReactQueryDevtools />}
        </Router>
      </QueryClientProvider>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); // Now inside Router context
  const { data, error } = useHeaderFooter();

  return (
    <div>
      <Header
        header={{
          menu_items: data?.header_menu_items,
          logo: data?.logo_url,
        }}
        err={error}
      />
      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorkPage />} />
            <Route path="/works/:id" element={<WorkDetailsPage />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/imagegrid" element={<ImageGrid />} />
            <Route path="/content" element={<PageContent />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer footer={data?.footer_menu_items} err={error} />
      <CustomCursor />
    </div>
  );
}

export default App;
