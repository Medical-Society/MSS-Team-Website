import { useState, useEffect } from "react";
import FormInput from "../Components/Login/FormInput";
import Button from "../Components/Login/Button";
import { loginAdmin } from "../services/auth";
import { useDispatch } from "react-redux";
import { loginReducer } from "../app/features/authSlice";
import { useLoginMutation } from "../app/services/authApi";
import { useNavigate } from "react-router-dom";

interface ILoginState {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [loginUser, {data, isSuccess, isLoading, isError, error}] = useLoginMutation();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      return alert('Please fill all fields');
    }
    await loginUser(login);
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      dispatch(loginReducer({token: data.data.token, admin: data.data.admin}));
      navigate('/');
      alert('Login successful');
    }
    if (isError && error) {
      const errorMessage = error as {data: {message: string}};
      alert(errorMessage.data.message);
    }
  }, [isSuccess, isError, data, error]);


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