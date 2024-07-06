import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer } from "../app/features/authSlice";
import { RootState } from "../app/store";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logoutReducer());
    navigate("/login");
  };

  return (
    <div className="bg-NewBlue text-white w-full p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Medical Society</h1>
      <div className="flex gap-4">
        {token ? (
          <>
            <NavLink
              to="/doctors"
              className="text-xl hover:text-primary active:text-primary"
            >
              Doctors
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-xl hover:text-primary active:text-primary"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="text-xl hover:text-primary active:text-primary"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
