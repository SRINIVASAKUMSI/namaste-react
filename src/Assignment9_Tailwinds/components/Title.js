import Logo from "../Assets/Images/Logo.png";

const Title = () => {
  return (
    <a href="/">
      <img
        className="max-h-20"
        src={Logo}
        // src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
      ></img>
    </a>
  );
};

export default Title;
