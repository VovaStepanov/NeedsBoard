import { anouncementsService } from "@/services/anouncements.service";
import { useQuery } from "@tanstack/react-query";

export interface AnouncementResponse {
    id: number;
    consumerId: number;
    categoryId: number;
    title: string;
    description: string;
    images: string[];
    status: number;
    createdDate: Date;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
}

export const useAnouncementQuery = (id: number) => {
    return useQuery<AnouncementResponse>({
        queryKey: ["anouncement", id],
        queryFn: () => anouncementsService.getAnouncementById(id),
    });
};
