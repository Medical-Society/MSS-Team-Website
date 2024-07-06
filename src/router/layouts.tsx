import { useState } from "react";
import { Outlet } from "react-router-dom";
import DoctorsSideBar from "../Components/DoctorsSideBar";

export const DoctorsLayout = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between h-full">
      <button
        className="md:hidden text-lg text-black hover:text-primary active:text-primary"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      {isOpened && (
        <button
          className="md:hidden text-lg text-black hover:text-primary active:text-primary"
          onClick={() => setIsOpened(false)}
        >
          Close Sidebar
        </button>
      )}
      <DoctorsSideBar isOpened={isOpened} toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
};
