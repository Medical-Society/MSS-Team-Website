import { useState } from "react";
import { useLocation } from "react-router-dom";
import { doctorResetPassword, PatientsResetPassword } from "../services/auth";
import FormInput from "../Components/Login/FormInput";
import Button from "../Components/Login/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
    // the link will be like /reset-password/doctors?token=token or /reset-password/patients?token=token
    // i need to know if the user is a doctor or a patient
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const userType = location.pathname.split('/')[2];
    console.log(userType, token);

    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password must be the same");
            return;
        }

        try {
            switch (userType) {
                case "doctors":
                    const res = await doctorResetPassword(token!, password);
                    console.log(res);
                    break;
                case "patients":
                    const ress = await PatientsResetPassword(token!, password);
                    console.log(ress);
                    break;
                default:
                    break;
            }
            toast.success("Password reset successfully");
            navigate("/login");
        }
        catch (error: any) {
            toast.error(error.response.data.message);
        }
        finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="w-full flex flex-col justify-center items-center h-full">
            <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
            <form
                className='flex flex-col bg-white rounded-2xl py-10 px-5 gap-4'
                onSubmit={handleSubmit}
            >
                <h1 className='text-primary text-3xl font-bold mb-4'>Reset Password</h1>
                <p className="text-gray-500 mb-4">Please enter your new password</p>
                <FormInput
                    label="password"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setPassword(e.target.value)}
                    ariaLabel="password"
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setConfirmPassword(e.target.value)}
                    ariaLabel="confirmPassword"
                />
                <Button text='Send' isLoading={isLoading} />
            </form>
            </div>
        </div>
    );
};

export default ResetPassword;