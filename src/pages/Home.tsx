import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Home = () => {
  const { admin } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md h-full w-full">
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Admin Page</h1>
      {admin && (
        <div className="bg-gray-100 rounded-md p-4 w-full max-w-lg">
          <div className="flex flex-col gap-4">
            <div className="border-b pb-2">
              <h2 className="text-xl font-semibold mb-2">Admin Information:</h2>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Name:</span>
                <span>{admin.name}</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <span>{admin.email}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
