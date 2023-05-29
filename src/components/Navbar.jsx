const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Real-Time Chat</a>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
