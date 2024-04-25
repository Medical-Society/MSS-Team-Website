import { useState } from "react";
import Paginator from "../Components/Paginator";
import Taple from "../Components/Taple";
import { useGetAcceptedDoctorsQuery } from "../app/services/DoctorsApi";
import { IDoctor } from "../interfaces";

interface IProps {

}

const ApprovedDoctors = ({}: IProps) => {
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {data, isLoading, isError} = useGetAcceptedDoctorsQuery({page, limit: rowsPerPage})
    
  if(isLoading) return <div className="flex justify-center items-center">Loading...</div>
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

export default ApprovedDoctors