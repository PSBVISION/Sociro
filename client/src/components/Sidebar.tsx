const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-full transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-slate-800 flex items-center gap-1.5">
          <img src="/logo.svg" alt="Logo" className="size-6" /> Sociro
        </div>
      </div>
      {/* Navigation Selection */}
      <div className="px-6 py-2">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Menu</span>
      </div>
      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1">
        {}
        </nav>
    </div>
  );
};

export default Sidebar;
