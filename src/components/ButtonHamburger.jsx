import "./icons/HeaderIconBars3";
import HeaderIconBars3 from "./icons/HeaderIconBars3";

export default function ButtonHamburger({ isOpen, setIsOpen }) {
  return (
    <button
      className="hover:text-green-500 transition-colors md:hidden focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <HeaderIconBars3 />
    </button>
  );
}
