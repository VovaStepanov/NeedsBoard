"use client";

import {
    Autocomplete,
    Container,
    ImageUpload,
    Input,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCategoriesQuery } from "@/queries/categoriesQuery";
import { anouncementsService } from "@/services/anouncements.service";
import dynamic from "next/dynamic";
import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";

const Editor = dynamic(
    () => import("@/components/shared/Editor").then((m) => m.ReactQuill),
    {
        ssr: false,
    },
);

const CreateAnouncementPage = () => {
    const router = useRouter();

    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    let consumerId = null;
    if (typeof window !== "undefined") {
        consumerId = Number(localStorage.getItem("userId"));
    }

    const { data: categories } = useCategoriesQuery();

    const isValid = Boolean(
        images.length > 0 && title && category && description,
    );

    const onSubmit = async () => {
        await anouncementsService.createAnouncement(
            consumerId ?? 0,
            Number(category),
            title,
            description,
            images,
        );

        router.push("/anouncements");
    };

    return (
        <Container className="pt-7">
            <h1 className="font-bold text-4xl">Create anouncement</h1>
            {/* Images, title, description */}
            <div className="w-[400px] mt-10">
                <ImageUpload
                    onChange={(values) => {
                        setImages(values);
                    }}
                />
            </div>
            <div className="w-[400px] mt-4">
                <Input
                    placeholder="Add title"
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value.trim())
                    }
                />
            </div>
            <div className="w-[400px] mt-4">
                <Autocomplete
                    items={categories ?? []}
                    onChange={(value) => {
                        setCategory(value);
                    }}
                    name="category"
                />
            </div>
            <div className="mt-4">
                <Editor
                    value={description}
                    onChange={(value) => setDescription(value)}
                />
            </div>
            <div className="mt-4">
                <Button
                    className={cn({
                        "opacity-40": !isValid,
                    })}
                    disabled={!isValid}
                    onClick={onSubmit}
                >
                    Create
                </Button>
            </div>
        </Container>
    );
};

export default CreateAnouncementPage;
