'use client';

import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Input from "@/app/components/inputs/Input";
import AuthSocialButton from './AuthSocialButton';
import Button from "@/app/components/Button";
import { toast } from "react-hot-toast";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok && !callback?.error) {
                        toast.success('Successful');
                        // Redirect or perform any other action after successful login
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false)
                    console.log(data)
                });
        }
    }

    const socialAction = async (action: string) => {
        try {
            // const [session] = useSession();
            // if (session) {
            //     // User is already authenticated, no need to sign in again
            //     toast.success('Already authenticated!');
            //     return;
            // }

            const result = await signIn(action, { redirect: false });
            if (result?.error) {
                toast.error('Invalid credentials!');
            } else if (result?.ok) {
                toast.success('Successful');
            }
        } catch (error) {
            // Handle any errors that occurred during the authentication process
            console.error('Error occurred during authentication:', error);
            toast.error('An error occurred');
        }
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 bg-darkerBlue py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    {variant === "REGISTER" && (
                        <Input id="name" errors={errors} label="Full Name" register={register} disabled={isLoading} />
                    )}
                    <Input id="email" errors={errors} label="Email address" type="email" register={register} disabled={isLoading} />
                    <Input id="password" errors={errors} label="Password" type="password" register={register} disabled={isLoading} />

                    <div>
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
                            <span className="bg-darkerBlue px-2 text-lightGray">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton icon={BsGithub} onClick={() => socialAction("github")} />
                        <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
                    </div>
                </div>

                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-lightGray">
                    <div className="">
                        {variant === "LOGIN" ? "New to messenger?" : "Already have an account?"}
                    </div>
                    <div onClick={toggleVariant} className="underline cursor-pointer text-lighterBlue">
                        {variant === "LOGIN" ? "Create an account" : "Log in"}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AuthForm