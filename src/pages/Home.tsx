import useAuth from "../hooks/useAuth"

interface IProps {

}

const Home = ({}: IProps) => {
  const {auth} = useAuth()
  return (
    <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">Welcome {auth.admin.name}</h1>
    </div>
  )
}

export default Home