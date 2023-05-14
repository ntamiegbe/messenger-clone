import { IconType } from "react-icons"

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({ 
    icon: Icon,
    onClick 
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full py-2 justify-center rounded-md text-darkGray shadow-sm ring-1 ring-inset ring-darkGray hover:bg-lightBlue focus:outline-offset-0"
        >
            <Icon />
        </button>
    )
}

export default AuthSocialButton