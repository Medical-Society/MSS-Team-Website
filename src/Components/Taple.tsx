import { IDoctor } from '../interfaces';

interface IData {
  englishFullName: string;
  status: string;
  createdAt: string;
}

interface ITableProps {
  data: IDoctor[];
}

export default function Taple({ data } : ITableProps) {
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
            <tr key={doctor.createdAt}>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.englishFullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}