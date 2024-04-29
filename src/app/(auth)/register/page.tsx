"use client";
import { Container } from "@/components/shared";
import { RegisterForm } from "./_components";
import { authService } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();

    return (
        <Container className={"min-h-screen flex items-center justify-center"}>
            <RegisterForm
                onSubmit={(values) => {
                    try {
                        authService.register(
                            values.firstname,
                            values.lastname,
                            values.tel,
                            values.email,
                            values.password,
                            values.isSupplier,
                        );

                        router.replace("/register/confirm");
                    } catch (e) {
                        router.refresh();
                    }
                }}
            />
        </Container>
    );
};

export default RegisterPage;
