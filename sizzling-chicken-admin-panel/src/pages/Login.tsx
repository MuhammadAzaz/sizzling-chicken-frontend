import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState(""); const [pw, setPw] = useState(""); const [err,setErr]=useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pw) return setErr("Enter email & password");
    localStorage.setItem("token","dev-token"); // real JWT later
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <form onSubmit={submit} className="card p-8 w-full max-w-sm">
        <h1 className="text-2xl font-black mb-6">Admin Login</h1>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <input className="input mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="input mb-6" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} />
        <button className="btn-primary w-full">Sign in</button>
      </form>
    </div>
  );
}