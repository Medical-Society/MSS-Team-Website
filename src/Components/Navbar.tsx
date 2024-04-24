import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer } from "../app/features/authSlice";
import { RootState } from "../app/store";
interface IProps {

}

const Navbar = ({}: IProps) => {

  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth)
  const handleLogout = () => {
    dispatch(logoutReducer());
  }
  return (
    <div className="bg-NewBlue text-white fixed top-0 z-20 left-0 w-full drop-shadow-sm p-4 flex justify-between items-center backdropfilter backdrop-blur-sm mb-20"> 
      <h1 className="">Medical society</h1>
        <NavLink to="/doctors" className="text-xl hover:text-primary active:text-primary">doctors</NavLink>
        <div className="flex gap-4">
            {
              !token ? <NavLink to="/login" className="text-xl hover:text-primary active:text-primary">Login</NavLink> 
              : 
              <button 
                className="text-xl hover:text-primary active:text-primary"
                onClick={handleLogout}
              > 
              Logout
              </button>
            }
        </div>
    </div>
  )
}

export default Navbar