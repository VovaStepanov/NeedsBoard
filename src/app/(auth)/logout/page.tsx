"use client";

import { authService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const LogoutPage = () => {
    const router = useRouter();

    useLayoutEffect(() => {
        authService.logout();
        localStorage.removeItem("access_token");
        localStorage.removeItem("userId");
        localStorage.removeItem("isSupplier");
        router.replace("/");
    }, []);

    return null;
};

export default LogoutPage;
