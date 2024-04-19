import { NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";
interface IProps {

}

const Navbar = ({}: IProps) => {

  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({
      token: "",
      admin: {
        name: "",
        email: ""
      }
    })
    Cookies.remove('token');
    Cookies.remove('admin');
  }
  return (
    <div className="bg-NewBlue text-white fixed top-0 z-20 left-0 w-full drop-shadow-sm p-4 flex justify-between items-center backdropfilter backdrop-blur-sm"> 
      <h1 className="">Medical society</h1>
        <NavLink to="/doctors" className="text-xl hover:text-primary active:text-primary">doctors</NavLink>
        <div className="flex gap-4">
            {
              !auth.token ? <NavLink to="/login" className="text-xl hover:text-primary active:text-primary">Login</NavLink> 
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