"use client";

import { Autocomplete, Container, Input } from "@/components/shared";
import { AnouncementCard } from "./_components/AnouncementCard";
import { MultiSelect } from "@/components/shared/MultiSelect";

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
    return (
        <Container>
            <div className="flex gap-2 items-center">
                <div className="max-w-[400px] w-full">
                    <Input placeholder="Search ..." />
                </div>
                <div className="max-w-[200px] w-full">
                    <Autocomplete items={frameworks} name="category" />
                </div>
                {/* <div>
                    <MultiSelect items={tags} onChange={() => {}} />
                </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test adad adsd dadasd"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
                <div className="">
                    <AnouncementCard
                        id={1}
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s"
                        }
                        title="Some title. Just test"
                    />
                </div>
            </div>
        </Container>
    );
};

export default AnouncementsPage;
