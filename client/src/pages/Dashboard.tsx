const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Bar */}
      <div>
        <h2 className="text-2xl text-slate-900">Good Morning! 👋</h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Here's what's happening with your social accounts today.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      </div>
    </div>
  );
};

export default Dashboard;
