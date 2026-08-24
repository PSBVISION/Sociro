const Accounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div>
          <h2>Connected Accounts</h2>
          <p></p>
        </div>
        <button>Add Account</button>
      </div>
    </div>
  );
};

export default Accounts;
