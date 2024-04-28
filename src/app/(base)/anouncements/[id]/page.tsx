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

interface AnouncementPagePropsType {
    params: {
        id: string;
    };
}

const AnouncementPage: React.FC<AnouncementPagePropsType> = ({
    params: { id },
}) => {
    return (
        <Container className="pt-7">
            <h1 className="font-bold text-4xl">Some title</h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-10">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Carousel className="w-full lg:w-[80%]">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">
                                                    {index + 1}
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="w-full lg:w-1/2 justify-center">
                    <div className="w-full">
                        <p className="font-semibold text-xs md:text-base">
                            Category
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<h1>Hi there!</h1>",
                            }}
                        />
                    </div>
                </div>
            </div>
            <h1 className="font-bold text-2xl mt-10 text-center">Author</h1>
            <div className="flex items-center justify-center gap-2 mt-4 pb-4">
                <Badge>Володимир Степанов</Badge>
                <Badge>+123456789</Badge>
                <Badge>123@gmail.com</Badge>
            </div>
        </Container>
    );
};

export default AnouncementPage;
