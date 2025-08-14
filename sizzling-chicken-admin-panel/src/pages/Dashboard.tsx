export default function Dashboard() {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-4">Orders Today: —</div>
          <div className="card p-4">Revenue: —</div>
          <div className="card p-4">Pending: —</div>
        </div>
      </div>
    );
  }