// import { useAnouncementsQuery } from "./anouncementsQuery";
// import { useInfiniteQuery } from "@tanstack/react-query";

import { anouncementsService } from "@/services/anouncements.service";
import { useInfiniteQuery } from "@tanstack/react-query";

// export const useAnouncementsQuery = (filters: {
//     currentPage: number;
//     categoryId: number | null;
//     searchString: string;
// }) => {
//     return useInfiniteQuery({
//         queryKey: [
//             "anouncements",
//             filters.currentPage,
//             filters.categoryId,
//             filters.searchString,
//         ],
//         queryFn: () => {},
//         initialPageParam: 1,
//         getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
//             lastPage.nextCursor,
//         getPreviousPageParam: (
//             firstPage,
//             allPages,
//             firstPageParam,
//             allPageParams,
//         ) => firstPage.prevCursor,
//     });
// };

// interface FetchDataParams {
//     currentPage: number;
//     categoryId: number;
//     searchString: string;
// }

// interface Item {
//     // Define the structure of items returned by your API
//     id: number;
//     name: string;
//     // Add more fields as necessary
// }

// interface FetchDataResponse {
//     items: Item[];
//     hasMore: boolean;
// }

export interface FetchDataResponse {
    items: Item[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    // hasMore: boolean;
}

export interface Item {
    id: number;
    consumerId: number;
    categoryId: number;
    title: string;
    description: string;
    images: null;
    status: number;
    createdDate: Date;
    phone: null;
    email: null;
    firstName: null;
    lastName: null;
}

export const useAnouncementsQuery = (
    categoryId: number,
    searchString: string,
) => {
    return useInfiniteQuery<FetchDataResponse>({
        queryKey: ["items", categoryId, searchString],
        queryFn: async ({ pageParam }) => {
            console.log(pageParam, "adsasd");
            return anouncementsService.getAnouncements({
                currentPage: pageParam as number,
                categoryId,
                searchString,
            });
        },
        getNextPageParam: (lastPage) => {
            const hasMore =
                lastPage.totalCount - lastPage.pageSize * (lastPage.pageNumber) >
                0;

            return hasMore ? lastPage.pageNumber + 1 : undefined;
        },
        initialPageParam: 1,
    });
};
