import clsx from "clsx";
import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    required?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type = "text",
    required,
    register,
    errors,
    disabled,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const inputType = type === "password" && !showPassword ? "password" : "text";

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-lightGray">
                {label}
            </label>
            <div className="mt-2 flex items-center justify-between relative">
                <input
                    id={id}
                    type={inputType}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(
                        "form-input block w-full rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-lighterBlue placeholder:text-darkerGray focus:ring-2 focus:ring-lightBlue sm:text-sm sm:leading-6",
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2"
                    >
                        {showPassword ? (
                            <AiFillEyeInvisible className="text-lighterBlue text-2xl" />
                        ) : (
                            <AiFillEye className="text-lighterBlue text-2xl" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
