import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import Orders from "./pages/Orders/Orders";
import Clients from "./pages/Clients/Clients";
import Reports from "./pages/Reports/Reports";
import Experts from "./pages/Experts/Experts";
import NotFound from "./pages/NotFound/NotFound";
import Feedback from './pages/Feedback/Feedback';
import ProfilePage from "./pages/Profilepage/Profilepage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/products"
          element={
            <ProductsPage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/orders"
          element={<Orders darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/clients"
          element={<Clients darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/reports"
          element={<Reports darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/experts"
          element={<Experts darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/feedback"
          element={<Feedback darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/profilepage"
          element={<ProfilePage darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/experts"
          element={<Experts darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="*"
          element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
