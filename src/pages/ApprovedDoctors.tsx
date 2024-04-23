import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["","Client name", "Status"];
 
const TABLE_ROWS = [
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
    { name: "Yostena lewis", status: "Approved" },
];
 
 const ApprovedDoctors = () => {
  return (
    <Card className="w-full mb-40 ml-0.5 mt-3">
      <table className="w-full min-w-max text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4 bg-gray-100 border-l border-blue-gray-100"
               >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-violet-950 text-[20px] font-medium font-['Cairo'] border-l border-blue-gray-100"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name,status }, index) => {
            const counter = index + 1;
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"  ;
            const verticalLine = "border-l border-blue-gray-100";
            const statusColor = status === "Approved" ? "text-green-700" : "";
            return (
              <tr key={name}>
                <td className={`${classes}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {counter}
                  </Typography>
                </td>


                <td className={`${classes} ${verticalLine}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} ${verticalLine} ${statusColor}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default ApprovedDoctors;