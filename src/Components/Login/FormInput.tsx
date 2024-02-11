import { useState } from "react";
import ShowpasswordIcon from "../../assets/visibility_off.jpg";

export interface FormInputProps {
    label: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    ariaLabel?: string;
    placeholder?: string;
  }
  
  const FormInput = ({label, type, id, name, value, onChange, ariaLabel}: FormInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div className='relative flex flex-col gap-1'>
        <label htmlFor={id}>{label}</label>
        <input
          type={(id === 'password' && showPassword) ? 'text' : type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={label}
          className='rounded-3xl p-2 border border-gray-300'
          aria-label={ariaLabel}
        />
        {(id === "password") && ShowpasswordIcon ? (
            <div
              className="absolute top-12 right-3 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={ShowpasswordIcon} alt="Password"
              />
            </div>
          ) : null}
      </div>
    )
  }
  
  export default FormInput
  