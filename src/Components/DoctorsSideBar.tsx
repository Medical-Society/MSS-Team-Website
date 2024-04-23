import { NavLink } from "react-router-dom"
interface IProps {

}

const DoctorsSideBar = ({}: IProps) => {
  return (
    <div className="md:w-1/6 h-full bg-gray-200 flex md:flex-col flex-row md:items-center md:justify-center md:space-y-10 mt-16 space-x-5  ">
      <NavLink to="/doctors" className="text-xl text-black hover:text-primary active:text-primary">All Doctors</NavLink>
      <NavLink to="/doctors/pending" className="text-xl text-black hover:text-primary active:text-primary">Pending Doctors</NavLink>
      <NavLink to="/doctors/approved" className="text-xl text-black hover:text-primary active:text-primary">Approved Doctors</NavLink>
      <NavLink to="/doctors/rejected" className="text-xl text-black hover:text-primary active:text-primary">Rejected Doctors</NavLink>
    </div>
  )
}

export default DoctorsSideBar