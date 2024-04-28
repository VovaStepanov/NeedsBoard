"use client";
import { Container } from "@/components/shared";
import { LoginForm } from "./_components";

const LoginPage = () => {
    return (
        <Container className={"min-h-screen flex items-center justify-center"}>
            <LoginForm onSubmit={(values) => {}} />
        </Container>
    );
};

export default LoginPage;
