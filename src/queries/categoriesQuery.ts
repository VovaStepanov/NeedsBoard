import { categoriesService } from "@/services/categories.service";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesService.getCategories(),
        select: (data) => {
            return data?.map((category) => ({
                label: category.name,
                value: category.id.toString(),
            }));
        },
    });
};
