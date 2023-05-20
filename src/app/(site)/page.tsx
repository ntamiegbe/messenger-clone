import Image from "next/image";
import AuthForm from "../components/Auth/AuthForm";

const Auth = () => {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-primaryBg">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="Logo"
                    height="50"
                    width="50"
                    className="mx-auto w-auto"
                    src="/images/logo.png"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-lightGray">Sign in to your account</h2>
            </div>
            <div className="m-4 lg:m-0">
                <AuthForm />
            </div>
        </div>
    )
}

export default Auth;