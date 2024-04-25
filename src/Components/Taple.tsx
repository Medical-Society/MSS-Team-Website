import { useNavigate } from 'react-router-dom';
import { IDoctor } from '../interfaces';

interface IData {
  _id: string;
  englishFullName: string;
  status: string;
  createdAt: string;
}

interface ITableProps {
  data: IDoctor[];
}

export default function Taple({ data } : ITableProps) {

  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/doctors/${id}`);

  }

  const Row = ({ doctor }: { doctor: IData }) => (
    <tr className="hover:bg-gray-100" onClick={() => handleRowClick(doctor._id)}>
      <td className="px-6 py-4 whitespace-nowrap">{doctor.englishFullName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{doctor.status}</td>
      <td className="px-6 py-4 whitespace-nowrap">{doctor.createdAt}</td>
    </tr>
  );

  return (
    <div className="w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((doctor: IData) => (
            <Row key={doctor._id} doctor={doctor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}