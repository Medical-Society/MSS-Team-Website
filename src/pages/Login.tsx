import { useState } from "react";
import FormInput from "../Components/Login/FormInput";
import Button from "../Components/Login/Button";
import { loginAdmin } from "../services/auth";
import { useDispatch } from "react-redux";
import { loginReducer } from "../app/features/authSlice";

interface ILoginState {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<ILoginState>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(login);
    try {
      const res = await loginAdmin(login.email, login.password);
      dispatch(loginReducer({token: res.data.token, admin: res.data.admin}));
      console.log(res);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-primary text-3xl font-bold mb-4'>Login</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
          <form 
            className='flex flex-col bg-white rounded-2xl py-10 px-5 gap-10'
            onSubmit={handleSubmit}
          >
            <FormInput
              label="Email"
              type="email"
              id="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              ariaLabel="Email"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              ariaLabel="Password"
            />
            <Button text='Login' isLoading={isLoading} />
          </form>

        </div>
    </div>
  );
};

export default Login;