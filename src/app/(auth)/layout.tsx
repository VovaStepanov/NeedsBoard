interface AuthLayoutPropsType {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutPropsType> = ({ children }) => {
    return <>{children}</>;
};

export default AuthLayout;
