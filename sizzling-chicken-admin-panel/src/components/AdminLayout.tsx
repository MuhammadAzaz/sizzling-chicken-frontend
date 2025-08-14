import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const nav = useNavigate();
  const logout = () => { localStorage.removeItem("token"); nav("/login"); };

  const link = "block px-4 py-2 rounded-lg font-semibold";
  const active = ({ isActive }: any) =>
    isActive ? `${link} bg-orange-100 text-orange-700` : `${link} hover:bg-orange-50`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <aside className="fixed left-0 top-0 h-screen w-64 p-4 border-r bg-white">
        <div className="text-2xl font-black mb-6" style={{color:"var(--brand1)"}}>🔥 Admin</div>
        <nav className="space-y-1">
          <NavLink to="/dashboard" className={active}>Dashboard</NavLink>
          <NavLink to="/categories" className={active}>Categories</NavLink>
          <NavLink to="/delivery-settings" className={active}>Delivery Settings</NavLink>
        </nav>
        <button className="mt-6 btn-primary w-full" onClick={logout}>Logout</button>
      </aside>

      <header className="ml-64 h-16 flex items-center px-6 border-b bg-white">
        <div className="font-bold">Sizzling Chicken — Admin Panel</div>
      </header>

      <main className="ml-64 p-6">
        <Outlet />
      </main>
    </div>
  );
}