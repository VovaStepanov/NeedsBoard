"use client";
import { RegisterForm } from "./_components";

const RegisterPage = () => {
    return <div className={"min-h-screen flex items-center justify-center"}>
        <RegisterForm onSubmit={(values) => {}}/></div>;
};

export default RegisterPage;
