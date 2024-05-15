import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[65px] w-[100%] bg-[rgb(47,48,50)] text-white flex items-center justify-between px-10 lg:px-48">
      <h1 className="font-bold text-2xl text-center">FITGURU</h1>
      <span className="flex items-center gap-8 text-lg">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <p className="font-semibold hover:cursor-pointer">HOME</p>
        </NavLink>
        <NavLink
          to="/exercises"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <p className="font-semibold hover:cursor-pointer">EXERCISE</p>
        </NavLink>
      </span>
    </div>
  );
};

export default Header;