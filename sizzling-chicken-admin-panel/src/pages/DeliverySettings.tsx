import { useEffect, useState } from "react";

type Form = { is_delivery_active:boolean; start_time:string; end_time:string; delivery_fee:number; min_order:number };
const LS_KEY = "admin.delivery_settings";

export default function DeliverySettings() {
  const [form, setForm] = useState<Form>({ is_delivery_active:false, start_time:"17:00:00", end_time:"22:00:00", delivery_fee:2.99, min_order:15 });

  useEffect(()=>{ const raw = localStorage.getItem(LS_KEY); if(raw) setForm(JSON.parse(raw)); },[]);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(LS_KEY, JSON.stringify(form));
    alert("Saved (local)—wire to API later");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-black">Delivery Settings</h1>
      <form onSubmit={save} className="card p-4 grid md:grid-cols-2 gap-4">
        <label className="flex items-center gap-2"><input type="checkbox" checked={form.is_delivery_active} onChange={e=>setForm({...form,is_delivery_active:e.target.checked})}/> Delivery Active</label>
        <input className="input" type="time" value={form.start_time} onChange={e=>setForm({...form,start_time:e.target.value})}/>
        <input className="input" type="time" value={form.end_time} onChange={e=>setForm({...form,end_time:e.target.value})}/>
        <input className="input" type="number" step="0.01" value={form.delivery_fee} onChange={e=>setForm({...form,delivery_fee:+e.target.value})}/>
        <input className="input" type="number" step="0.01" value={form.min_order} onChange={e=>setForm({...form,min_order:+e.target.value})}/>
        <button className="btn-primary md:col-span-2">Save</button>
      </form>
    </div>
  );
}