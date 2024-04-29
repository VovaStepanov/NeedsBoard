import { api } from "@/utils/api/api";
import { redirect } from "next/navigation";

class AuthService {
    async login(email: string, password: string, isSupplier: boolean) {
        const response = await api
            .post<{
                accessToken: string;
                userId: number;
                isSupllier: boolean;
            }>("/signIn", {
                email,
                password,
                IsSupllier: isSupplier,
            })
            .then((data) => data.data);

        return response;
    }
    async register(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string,
        isSupplier: boolean,
    ) {
        await api.post("/signUp", {
            firstName,
            lastName,
            phone,
            email,
            password,
            isSupplier,
        });
    }
    async logout() {
        await api.get("/sighout");
    }
}

export const authService = new AuthService();
