import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import DeliverySettings from "./pages/DeliverySettings";
import Login from "./pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/delivery-settings" element={<DeliverySettings />} />
        {/* next steps later: /products, /promotions, /orders, /couriers, /users */}
      </Route>
    </Routes>
  );
}