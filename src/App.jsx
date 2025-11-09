import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import PrabhaFoundationCare from "./Pages/PrabhaFoundationCare";
import AdminLogin from "./Pages/AdminLogin";
import AdminPage from "./Pages/AdminPage";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const isAdminAuthenticated =
    localStorage.getItem("isAdminAuthenticated") === "true";

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate("/admin-login");
    }
  }, [isAdminAuthenticated, navigate]);

  return isAdminAuthenticated ? element : null;
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

// 👇 This component allows us to conditionally hide Navbar/Footer
function MainLayout() {
  const location = useLocation();

  // Define routes where Navbar/Footer should NOT appear
  const hideLayoutRoutes = ["/admin-login"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen scrollbar-hide">
      {/* Navbar — hide on admin-login */}
      {!shouldHideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/prabha-foundation-care"
            element={<PrabhaFoundationCare />}
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminPage />} />}
          />
        </Routes>
      </main>

      {/* Footer — hide on admin-login */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
