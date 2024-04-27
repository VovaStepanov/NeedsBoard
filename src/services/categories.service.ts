import { api } from "@/utils/api/api";

class CategoriesService {
    async getCategories() {
        const response = await api
            .get<
                {
                    id: number;
                    name: string;
                }[]
            >("/Category")
            .then((data) => data.data);

        return response;
    }
}

export const categoriesService = new CategoriesService();
