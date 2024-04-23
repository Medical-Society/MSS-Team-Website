import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import router from "./router/router"
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux"
import { loginReducer } from "./app/features/authSlice"

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
      const token = Cookies.get('token');
      const admin = Cookies.get('admin');
      if (token && admin) {
        if (token && admin) {
          dispatch(loginReducer({token, admin: JSON.parse(admin)}));
      }
      }
  }, [])

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
