import { HeartHandshake } from "lucide-react";
import Link from "next/link";

interface AuthLayoutPropsType {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutPropsType> = ({ children }) => {
    return (
        <>
            <header className="p-4 fixed top-0">
                <Link href="/" className="flex gap-1">
                    <HeartHandshake className="w-6 h-6" />
                    <span className="font-medium">Back</span>
                    <span className="sr-only">Logo</span>
                </Link>
            </header>
            <main>{children}</main>
        </>
    );
};

export default AuthLayout;
