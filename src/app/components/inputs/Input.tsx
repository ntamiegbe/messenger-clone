import clsx from "clsx"
import React from "react";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'


interface InputProps {
    id: string;
    label: string;
    type?: string;
    required?: string;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-darkGray">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx("form-input block w-full rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-lighterBlue placeholder:text-darkerGray focus:ring-2 focus:ring-lightBlue sm:text-sm sm:leading-6", 
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-not-allowed",

                    )}
                />
            </div>
        </div>
    )
}

export default Input