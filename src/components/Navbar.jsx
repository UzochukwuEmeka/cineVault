import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../constant/navigation";
const Navbar = () => {
  const location = useLocation();
  const removeSpace = location.search?.slice(3)?.split("%20")?.join();

  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

 

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed top-0 w-full h-16 bg-black lg:bg-neutral-600 bg-opacity-75 z-40">
      <div className="container mx-auto px-2 h-full flex items-center ">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div 
              key={index}
              >
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-400 ${
                      isActive && `text-neutral-100`
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden sm:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </form>
          <button className="text-2xl text-white">
            <IoSearchOutline />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} alt="user icon" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
