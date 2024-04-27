interface RootLayoutPropsType {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutPropsType> = ({ children }) => {
    return <>{children}</>;
};

export default RootLayout;
