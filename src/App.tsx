import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AdminProductForm from "./pages/admin/AdminPage";
import LoginForm from "./pages/Login";
import PrivateRoute from "./pages/components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminProductForm />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
