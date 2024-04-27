import { Header } from "@/components/shared";

interface RootLayoutPropsType {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutPropsType> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
        </div>
    );
};

export default RootLayout;
