const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
        ></img>
        <ul className="nav-items">
          <li>Profile</li>
          <li>Contact US</li>
          <li>About US</li>
          <li>Cart</li>
          <button>Sign In</button>
          <button>Sign Out</button>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
