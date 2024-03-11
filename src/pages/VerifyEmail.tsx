import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { verifyEmail } from "../services/auth";

interface IProps {

}

const VerifyEmail = ({}: IProps) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const userType = location.pathname.split('/')[2];
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const res = await verifyEmail(token!, userType);
            console.log(res);
        }
        catch (error: any) {
            setError(error?.response?.data?.message);
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {isLoading ? (
                <h1 className="text-primary text-3xl">Loading...</h1>
            ) : (
                error ? (
                    <h1 className="text-red-600 text-3xl font-mono">{error}</h1>
                ) : (
                    <h1 className="text-green-700 text-3xl font-mono">Email Verified</h1>
                )
            )}
        </div>
    );
};

export default VerifyEmail;
