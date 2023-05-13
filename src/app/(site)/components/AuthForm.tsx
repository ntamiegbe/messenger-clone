'use client'

import { useCallback, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"

type Props = {}

type Variant = "LOGIN" | "REGISTER"

const AuthForm = (props: Props) => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else {
            setVariant("LOGIN")
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            fullName: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
        
        if (variant === "REGISTER") {
            //Register logic
        }
        
        if (variant === "LOGIN") {
            //Login logic
        }
    }
    
    const socialAction = (action: string) => {
        setIsLoading(true)

    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 bg-darkerBlue py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <Input id="Email" errors={errors} label="Full Name" register={register}/>
                    <Input id="Email" errors={errors} label="Email" register={register}/>
                </form>
            </div>
        </div>
    )
}

export default AuthForm