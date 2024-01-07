import Actions from './actions';
import Logo from "./logo";
import Search from "./search";

const Navbar = () => {
  return (
    <nav className=" top- fixed z-[49] flex h-20 w-full items-center justify-between bg-[#252731] px-2 shadow-sm lg:px-4">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};
export default Navbar;
