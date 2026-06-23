import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import "./App.css";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
