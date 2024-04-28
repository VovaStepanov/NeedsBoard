"use client";
import { Container } from "@/components/shared";
import { RegisterForm } from "./_components";

const RegisterPage = () => {
    return (
        <Container className={"min-h-screen flex items-center justify-center"}>
            <RegisterForm onSubmit={(values) => {}} />
        </Container>
    );
};

export default RegisterPage;
