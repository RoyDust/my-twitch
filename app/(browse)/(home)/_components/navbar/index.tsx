import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className=" fixed top- w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
    </nav>
  );
};
export default Navbar;
