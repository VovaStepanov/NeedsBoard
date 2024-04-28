"use client";

import {
    Autocomplete,
    Container,
    ImageUpload,
    Input,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Editor = dynamic(
    () => import("@/components/shared/Editor").then((m) => m.ReactQuill),
    {
        ssr: false,
    },
);

const CreateAnouncementPage = () => {
    return (
        <Container className="pt-7">
            <h1 className="font-bold text-4xl">Create anouncement</h1>
            {/* Images, title, description */}
            <div className="w-[400px] mt-10">
                <ImageUpload onChange={() => {}} />
            </div>
            <div className="w-[400px] mt-4">
                <Input placeholder="Add title" />
            </div>
            <div className="w-[400px] mt-4">
                <Autocomplete
                    items={[
                        {
                            value: "test",
                            label: "test",
                        },
                        {
                            value: "test2",
                            label: "test2",
                        },
                        {
                            value: "test3",
                            label: "test3",
                        },
                    ]}
                    name="category"
                />
            </div>
            <div className="mt-4">{/* <Editor /> */}</div>
            <div className="mt-4">
                <Button>Create</Button>
            </div>
        </Container>
    );
};

export default CreateAnouncementPage;
