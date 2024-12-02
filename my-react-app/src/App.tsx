import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import "./App.css";

function App() {
  const location = useLocation();

  const knownPaths: string[] = ["/", "/about", "/contact", "/quiz"]; // Constant

  useEffect(() => {
    document.body.className = "body-default";

    if (location.pathname === "/") {
      document.body.classList.add("body-home");
    } else if (!knownPaths.some((path) => location.pathname.startsWith(path))) {
      document.body.classList.add("body-error");
    }
  }, [location]); // Only `location` is necessary

  return (
    <>
      <NavBar />
      <div className="pages">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
