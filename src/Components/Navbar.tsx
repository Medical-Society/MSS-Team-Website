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
  console.log(auth);
  return (
    <div className="fixed top-0 z-20 left-0 w-full drop-shadow-sm p-4 flex justify-between items-center backdropfilter backdrop-blur-sm"> 
      <h1 className="text-black">Navbar</h1>
        <div className="flex gap-4">
            <NavLink to="/" className="text-xl text-black hover:text-primary active:text-primary">Home</NavLink>
            {
              !auth.token ? <NavLink to="/login" className="text-xl text-black hover:text-primary active:text-primary">Login</NavLink> 
              : 
              <button 
                className="text-xl text-black hover:text-primary active:text-primary"
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