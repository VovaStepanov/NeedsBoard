"use client";

import { Autocomplete, Container, Input } from "@/components/shared";
import { AnouncementCard } from "./_components/AnouncementCard";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { useCategoriesQuery } from "@/queries/categoriesQuery";
import { anouncementsService } from "@/services/anouncements.service";
import { useAnouncementsQuery } from "@/queries/anouncementsQuery";
import { Button } from "@/components/ui/button";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

const tags = ["New", "Test", "Recent"];

const AnouncementsPage = () => {
    const { data: categories } = useCategoriesQuery();

    const [filters, setFilters] = useState<{
        categoryId: number;
        searchString: string;
    }>({
        categoryId: 0,
        searchString: "",
    });

    const observer = useRef<IntersectionObserver>();
    const lastItemRef = useRef<HTMLDivElement | null>(null);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isLoading,
    } = useAnouncementsQuery(filters.categoryId, filters.searchString);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        }, options);

        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }

        return () => {
            if (observer.current && lastItemRef.current) {
                observer.current.unobserve(lastItemRef.current);
            }
        };
    }, [hasNextPage, fetchNextPage]);

    return (
        <Container>
            <div className="flex gap-2 items-center">
                <div className="max-w-[400px] w-full">
                    <Input
                        placeholder="Search ..."
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const newValue = event.target.value ?? "";
                            setFilters({
                                ...filters,
                                searchString: newValue,
                            });
                        }}
                    />
                </div>
                <div className="max-w-[200px] w-full">
                    <Autocomplete
                        items={[
                            { label: "All", value: "0" },
                            ...(categories ?? []),
                        ]}
                        name="category"
                        onChange={(value: string) => {
                            setFilters({
                                ...filters,
                                categoryId: Number(value),
                            });
                        }}
                    />
                </div>
                {/* <div>
                    <MultiSelect items={tags} onChange={() => {}} />
                </div> */}
            </div>
            {data?.pages?.[0]?.items &&
                data?.pages?.[0]?.items?.length > 0 &&
                !isLoading && (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                            {data?.pages.map((page, i) => (
                                <Fragment key={i}>
                                    {page.items.map((item, index: number) => (
                                        <AnouncementCard
                                            key={index}
                                            id={item.id}
                                            image={
                                                item.images?.[0] ??
                                                "https://info.renome.ua/wp-content/uploads/2021/09/placeholder.png"
                                            }
                                            title={item.title}
                                        />
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                        <div ref={lastItemRef}></div>
                    </>
                )}
            {data?.pages?.[0]?.items &&
                !(data?.pages?.[0]?.items?.length > 0) &&
                !isLoading && (
                    <div className="w-full h-full items-center justify-center text-center mt-4">
                        <p>No anouncements</p>
                    </div>
                )}
            {!data?.pages?.length && isLoading && (
                <div className="w-full h-full items-center justify-center text-center mt-4">
                    <p>Loading...</p>
                </div>
            )}
            {/* {hasNextPage && (
                <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                >
                    Load More
                </Button>
            )} */}
        </Container>
    );
};

export default AnouncementsPage;
