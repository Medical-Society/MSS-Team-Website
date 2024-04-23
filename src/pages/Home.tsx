import { useSelector } from "react-redux"
import { RootState } from "../app/store"

interface IProps {

}

const Home = ({}: IProps) => {
  const { admin } = useSelector((state: RootState) => state.auth)

  return (
    <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">Welcome {admin?.name}</h1>
    </div>
  )
}

export default Home