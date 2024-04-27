"use client";
import {LoginForm} from './_components';
import { RegisterForm } from "@/app/(auth)/register/_components";


const LoginPage = () => {
    return <div><LoginForm onSubmit={(values) => {}}/></div>;
};

export default LoginPage;
