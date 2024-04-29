import { api } from "@/utils/api/api";

class AnouncementsService {
    async getAnouncements(filters: {
        currentPage: number;
        categoryId: number;
        searchString?: string;
    }) {
        const response = await api
            .post("/list", {
                currentPage: filters.currentPage,
                categoryId: filters.categoryId ?? 0,
                searchString: filters.searchString ?? "",
                pageSize: 16,
            })
            .then((data) => data.data);

        return response;
    }

    async getAnouncementById(id: number) {
        const response = await api
            .get(`/Announcement/getItem/${id}`)
            .then((data) => data.data);

        console.log(response);
        return response;
    }

    async createAnouncement(
        consumerId: number,
        categoryId: number,
        title: string,
        description: string,
        images: string[],
    ) {
        const response = await api.post("/create", {
            consumerId,
            categoryId,
            title,
            description,
            images,
            status: 0,
        });

        console.log(response);
        return response;
    }
}

export const anouncementsService = new AnouncementsService();
