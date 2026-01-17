import "./icons/HeaderIconBars3";
import HeaderIconBars3 from "./icons/HeaderIconBars3";

export default function ButtonHamburger({ isOpen, setIsOpen }) {
  return (
    <button
      className="hover:text-cyan-400 transition-colors md:hidden focus:outline-none cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <HeaderIconBars3 />
    </button>
  );
}
