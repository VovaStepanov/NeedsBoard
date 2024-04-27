"use client";

import dynamic from "next/dynamic";
import { TypewriterEffectSmooth } from "./_components/Typewriter";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { globeConfig, sampleArcs } from "@/utils/config/homeGlobeConfig";
import Link from "next/link";

const World = dynamic(() => import("./_components").then((m) => m.World), {
    ssr: false,
});

export default function Home() {
    return (
        <Container className="flex gap-4 flex-1 flex-col md:flex-row justify-center md:justify-start">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <div className="translate-y-[-20%]">
                    <TypewriterEffectSmooth
                        words={
                            [
                                {
                                    text: "Share",
                                },
                                {
                                    text: "your",
                                },
                                {
                                    text: "help",
                                    className: "text-blue-500 dark:text-blue-500",
                                },
                            ]
                        }
                    />
                    <p className="max-w-[500px] mt-4">
                        Whether you&apos;re seeking advice, assistance with
                        tasks, or simply a friendly ear, our platform connects
                        individuals eager to support one another. Join us in
                        fostering a culture of kindness, collaboration, and
                        empowerment.
                    </p>
                    <div className="flex gap-2 mt-8">
                        <Button asChild>
                            <Link href="/register">Become user</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/anouncements">Watch anouncements</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center overflow-hidden relative">
                <div className="hidden md:block absolute w-[400px] lg:w-[600px] xl:w-[800px] aspect-square">
                    <World data={sampleArcs} globeConfig={globeConfig} />;
                </div>
            </div>
        </Container>
    );
}
