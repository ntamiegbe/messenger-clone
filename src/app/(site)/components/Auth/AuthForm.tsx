'use client'

import { useCallback, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "../inputs/Input"
import Button from "../Button"
import AuthSocialButton from "./AuthSocialButton"
import { BsGithub, BsGoogle } from 'react-icons/bs'

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
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
                    {variant === "REGISTER" && (
                        <Input id="fullName" errors={errors} label="Full Name" register={register} disabled={isLoading} />
                    )}
                    <Input id="email" errors={errors} label="Email address" type="email" register={register} disabled={isLoading} />
                    <Input id="password" errors={errors} label="Password" type="password" register={register} disabled={isLoading} />
                    <div className="">
                        <Button
                            fullWidth
                            disabled={isLoading}
                            type="submit"
                        >
                            {variant === "LOGIN" ? "Sign in" : "Register"}
                        </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-lighterBlue" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-darkerBlue px-2 text-darkGray">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')}/>
                        <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm