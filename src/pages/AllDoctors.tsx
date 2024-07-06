import { useState } from "react"
import Taple from "../Components/Taple"
import { useGetAllDoctorsQuery } from "../app/services/DoctorsApi"
import { IDoctor } from "../interfaces"
import Paginator from "../Components/Paginator"
interface IProps {

}

const AllDoctors = ({}: IProps) => {
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {data, isLoading, isError, error} = useGetAllDoctorsQuery({page, limit: rowsPerPage})
    
    if(isLoading) return <div className="flex justify-center items-center w-full h-full">Loading...</div>
    if(isError) console.log(error)
      
    if(isError) return <div className="flex justify-center items-center">Error...</div>
    const allDoctors: IDoctor[] = data?.data?.doctors || []
    const totalPages = data?.data?.totalPages || 0
    return (
      <div className="w-full">
        <Taple 
          data={allDoctors} 
        />
        <div className="flex justify-center items-center space-x-5">
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="mt-4"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          
          <Paginator
            page={page}
            pageCount={totalPages}
            total={totalPages * rowsPerPage}
            isLoading={false}
            onClickPrev={() => setPage(page - 1)}
            onClickNext={() => setPage(page + 1)}
          />
        </div>
      </div>
    )
  }

export default AllDoctors