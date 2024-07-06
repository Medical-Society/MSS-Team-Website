import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  isOpened: boolean;
  toggleSidebar: () => void;
}

const DoctorsSideBar: React.FC<IProps> = ({ isOpened, toggleSidebar }) => {
  return (
    <div
      className={`w-full md:w-96 h-full bg-gray-200 flex flex-col items-start md:items-center px-4 py-10 ${
        isOpened ? "block" : "hidden md:block"
      }`}
    >
      <button
        className="md:hidden text-lg text-black hover:text-primary active:text-primary"
        onClick={toggleSidebar}
      >
        Close Sidebar
      </button>
     <div className="flex flex-col items-start md:items-center gap-5 px-4">
     <NavLink
        to="/doctors"
        className="text-lg md:text-xl text-black hover:text-primary active:text-primary"
      >
        All Doctors
      </NavLink>
      <NavLink
        to="/doctors/pending"
        className="text-lg md:text-xl text-black hover:text-primary active:text-primary"
      >
        Pending Doctors
      </NavLink>
      <NavLink
        to="/doctors/approved"
        className="text-lg md:text-xl text-black hover:text-primary active:text-primary"
      >
        Approved Doctors
      </NavLink>
      <NavLink
        to="/doctors/rejected"
        className="text-lg md:text-xl text-black hover:text-primary active:text-primary"
      >
        Rejected Doctors
      </NavLink>
     </div>
    </div>
  );
};

export default DoctorsSideBar;
