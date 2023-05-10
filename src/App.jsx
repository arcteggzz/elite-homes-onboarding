import { lazy } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//lazyLoading for pages
const SplashScreenPage = lazy(() => import("./pages/SplashScreenPage/"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage/"));
const LoginPage = lazy(() => import("./pages/LoginPage/"));
const CreateAccountPage = lazy(() => import("./pages/CreateAccountPage/"));

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashScreenPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
