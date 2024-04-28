import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface AnouncementCardPropsType {
    id: number;
    image: string;
    title: string;
}

export const AnouncementCard: React.FC<AnouncementCardPropsType> = ({
    id,
    image,
    title,
}) => {
    return (
        <Card className="w-full h-full max-w-xs rounded-xl border width">
            <div className="h-full flex flex-col gap-2 sm:gap-4 p-4">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <Image
                        alt="Product image"
                        className="aspect-[4/5] object-cover border w-full"
                        height="500"
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                        width="400"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-xs md:text-base">
                        {title}
                    </h3>
                </div>
                <Button size="sm" className="text-xs sm:text-base" asChild>
                    <Link href={`anouncements/${id}`}>Watch</Link>
                </Button>
            </div>
        </Card>
    );
};
