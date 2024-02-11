import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import router from "./router/router"
import Cookies from 'js-cookie'
import { useAuth } from "./hooks/useAuth"

function App() {
  
  const { setAuth } = useAuth()

  useEffect(() => {
      const token = Cookies.get('token');
      const admin = Cookies.get('admin');
      if (token && admin) {
          setAuth({
              token,
              admin: JSON.parse(admin)
          });
      }
  }, [])

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
