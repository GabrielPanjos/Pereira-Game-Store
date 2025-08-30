import logo from "../../assets/logo.avif";

export function Header() {
  return (
    <div className="w-full h-40 flex items-center bg-sky-300">
      <img className="ml-5 h-25" src={logo} alt="" />
    </div>
  );
}
