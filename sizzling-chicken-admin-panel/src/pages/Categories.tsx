import { useEffect, useMemo, useState } from "react";

type Category = { id:number; name:string; slug:string; description?:string|null; sort_order:number; is_active:boolean };

const LS_KEY = "admin.categories";

export default function Categories() {
  const [rows, setRows] = useState<Category[]>([]);
  const [form, setForm] = useState<Partial<Category>>({ name:"", slug:"", sort_order:0, is_active:true });
  const [query, setQuery] = useState("");

  // seed or load from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) setRows(JSON.parse(raw));
    else {
      const seed: Category[] = [
        { id:1, name:"Pizza", slug:"pizza", sort_order:1, is_active:true, description:null },
        { id:2, name:"Burgers", slug:"burgers", sort_order:2, is_active:true, description:null },
        { id:3, name:"Wraps", slug:"wraps", sort_order:3, is_active:true, description:null },
      ];
      setRows(seed); localStorage.setItem(LS_KEY, JSON.stringify(seed));
    }
  }, []);

  const saveLS = (next: Category[]) => localStorage.setItem(LS_KEY, JSON.stringify(next));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(r => r.name.toLowerCase().includes(q) || r.slug.toLowerCase().includes(q));
  }, [rows, query]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.slug) return;
    if (form.id) {
      const next = rows.map(r => (r.id === form.id ? { ...r, ...form } as Category : r));
      setRows(next); saveLS(next);
    } else {
      const id = Math.max(0, ...rows.map(r=>r.id)) + 1;
      const next = [...rows, { id, name: form.name!, slug: form.slug!, sort_order: form.sort_order ?? 0, is_active: form.is_active ?? true, description: form.description ?? null }];
      setRows(next); saveLS(next);
    }
    setForm({ name:"", slug:"", sort_order:0, is_active:true, description:"" });
  };

  const edit = (r: Category) => setForm({ ...r });
  const del = (id: number) => {
    const next = rows.filter(r => r.id !== id);
    setRows(next); saveLS(next);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-black">Categories</h1>

      <div className="card p-4">
        <form onSubmit={submit} className="grid md:grid-cols-6 gap-3">
          <input className="input" placeholder="Name" value={form.name || ""} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input className="input" placeholder="Slug" value={form.slug || ""} onChange={e=>setForm({...form, slug:e.target.value})}/>
          <input className="input" type="number" placeholder="Sort" value={form.sort_order ?? 0} onChange={e=>setForm({...form, sort_order:+e.target.value})}/>
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.is_active ?? true} onChange={e=>setForm({...form, is_active:e.target.checked})}/> Active</label>
          <input className="input md:col-span-2" placeholder="Description (optional)" value={form.description ?? ""} onChange={e=>setForm({...form, description:e.target.value})}/>
          <div className="md:col-span-6 flex gap-2">
            <button className="btn-primary">{form.id ? "Update" : "Create"}</button>
            {form.id && <button type="button" className="px-4 py-2 rounded-xl font-bold border" onClick={()=>setForm({ name:"", slug:"", sort_order:0, is_active:true })}>Cancel</button>}
            <div className="ml-auto"><input className="input" placeholder="Search…" value={query} onChange={e=>setQuery(e.target.value)} /></div>
          </div>
        </form>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr><th className="p-3">Name</th><th>Slug</th><th>Sort</th><th>Active</th><th className="p-3">Description</th><th className="p-3 text-right">Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(r=>(
              <tr key={r.id} className="border-t">
                <td className="p-3">{r.name}</td>
                <td>{r.slug}</td>
                <td>{r.sort_order}</td>
                <td>{r.is_active ? "Yes":"No"}</td>
                <td className="p-3">{r.description}</td>
                <td className="p-3 text-right">
                  <button className="underline mr-2" onClick={()=>edit(r)}>Edit</button>
                  <button className="underline text-red-600" onClick={()=>del(r.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length===0 && <tr><td className="p-6 text-center text-gray-500" colSpan={6}>No categories</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}