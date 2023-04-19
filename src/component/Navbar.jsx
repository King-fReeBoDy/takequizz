import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isLogout, setIsLogout] = useState(false);
  return (
    <div className="border w-full">
      <nav className="flex justify-between items-center w-[90%] mx-auto py-3 lg:w-[1000px]">
        <p className="cursor-pointer">
          <RxHamburgerMenu className="text-xl" />
        </p>

        <h2 className="text-2xl hidden lg:block">Student Dashboard</h2>
        <div className="relative">
          <div className="flex items-center">
            <p
              className="cursor-pointer"
              onClick={() => setIsLogout(!isLogout)}
            >
              01001110205
            </p>
            <i className="ml-2">
              <BsFillArrowDownCircleFill />
            </i>
          </div>
          {isLogout && (
            <p className="absolute text-center bg-blue-700 text-gray-100 w-full mt-2">
              Logout
            </p>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
