"use client";
import { Container } from "@/components/shared";
import { LoginForm } from "./_components";
import { authService } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    return (
        <Container className={"min-h-screen flex items-center justify-center"}>
            <LoginForm
                onSubmit={(values) => {
                    authService
                        .login(values.email, values.password, values.isSupplier)
                        .then((data) => {
                            localStorage.setItem(
                                "access_token",
                                data.accessToken,
                            );
                            localStorage.setItem(
                                "userId",
                                data.userId.toString(),
                            );
                            localStorage.setItem(
                                "isSupplier",
                                data.isSupllier.toString(),
                            );
                            router.replace("/");
                        });
                }}
            />
        </Container>
    );
};

export default LoginPage;
