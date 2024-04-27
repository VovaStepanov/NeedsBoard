"use client";

import { Container } from "@/components/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useAnouncementQuery } from "@/queries/anouncementQuery";
import { useCategoriesQuery } from "@/queries/categoriesQuery";
import { anouncementsService } from "@/services/anouncements.service";
import { useEffect, useState } from "react";

interface AnouncementPagePropsType {
    params: {
        id: string;
    };
}

async function base64WithMetadataToBlobURL(
    base64WithMetadata: string,
): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        // Convert base64 string to binary data
        const binaryString = atob(base64WithMetadata.split(",")[1]);
        const binaryData = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            binaryData[i] = binaryString.charCodeAt(i);
        }

        // Create Blob from binary data
        const mimeType = base64WithMetadata.match(/^data:([^;]+);/)?.[1];
        if (!mimeType) {
            reject(new Error("Failed to determine mime type"));
            return;
        }
        const blob = new Blob([binaryData.buffer], { type: mimeType });

        // Create File from Blob
        const fileName = "image"; // Set a default file name
        const file = new File([blob], fileName, { type: mimeType });

        // Create URL from File
        const fileURL = URL.createObjectURL(file);
        resolve(fileURL);
    });
}

const AnouncementPage: React.FC<AnouncementPagePropsType> = ({
    params: { id },
}) => {
    const { data: anouncement } = useAnouncementQuery(Number(id));
    const { data: categories } = useCategoriesQuery();

    const [images, setImages] = useState<string[]>([]);

    const categoryName = categories?.find(
        (category) => Number(category.value) === anouncement?.categoryId,
    );

    useEffect(() => {
        const res: string[] = [];
        anouncement?.images?.forEach(async (image) => {
            const imageUrl = await base64WithMetadataToBlobURL(image);
            res.push(imageUrl);
        });
        setImages(res);
    }, [anouncement?.images]);

    return (
        <Container className="pt-7">
            <h1 className="font-bold text-4xl">{anouncement?.title}</h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-10">
                <div className="w-full lg:w-1/2 flex justify-center">
                    {images.length > 0 && (
                        <Carousel className="w-full lg:w-[80%]">
                            <CarouselContent>
                                {images?.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    )}
                    {images.length === 0 && (
                        <div className="w-full aspect-square bg-slate-900 flex items-center justify-center rounded-lg">
                            <p>No images for this anouncement</p>
                        </div>
                    )}
                </div>
                <div className="w-full lg:w-1/2 justify-center">
                    <div className="w-full">
                        <p className="font-semibold text-xs md:text-base">
                            {categoryName?.label}
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: anouncement?.description ?? "",
                            }}
                        />
                    </div>
                </div>
            </div>
            <h1 className="font-bold text-2xl mt-10 text-center">Author</h1>
            <div className="flex items-center justify-center gap-2 mt-4 pb-4">
                <Badge>
                    {anouncement?.firstName} {anouncement?.lastName}
                </Badge>
                <Badge>{anouncement?.phone}</Badge>
                <Badge>{anouncement?.email}</Badge>
            </div>
        </Container>
    );
};

export default AnouncementPage;
