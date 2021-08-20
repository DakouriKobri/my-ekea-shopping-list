import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img className="logo img img-fluid" src={logo} alt="logo" />
    </header>
  );
}
