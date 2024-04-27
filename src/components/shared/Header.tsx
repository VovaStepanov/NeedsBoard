"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { HeartHandshake, MenuIcon, ShirtIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    let accessToken;
    let isSupplier = false;

    if (typeof window !== "undefined") {
        accessToken = localStorage?.getItem("access_token");
        isSupplier = JSON.parse(localStorage?.getItem("isSupplier") ?? "false");
    }

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetTrigger asChild>
                        <Link href="/">
                            <HeartHandshake className="w-6 h-6" />
                            <span className="sr-only">Logo</span>
                        </Link>
                    </SheetTrigger>
                    <div className="grid gap-2 py-6">
                        <SheetTrigger asChild>
                            <Link
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                href="/"
                            >
                                Home
                            </Link>
                        </SheetTrigger>
                        <SheetTrigger asChild>
                            <Link
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                href="/anouncements"
                            >
                                Anouncements
                            </Link>
                        </SheetTrigger>
                    </div>
                </SheetContent>
            </Sheet>
            <Link className="mr-6 hidden lg:flex" href="#">
                <HeartHandshake className="h-6 w-6" />
                <span className="sr-only">Logo</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href="/"
                        >
                            Home
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href="/anouncements"
                        >
                            Anouncements
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto flex gap-2">
                {!accessToken && (
                    <>
                        <Button variant="outline" asChild>
                            <Link href="/login">Sign in</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Sign Up</Link>
                        </Button>
                    </>
                )}
                {!!accessToken && !isSupplier && (
                    <Button asChild>
                        <Link href="/anouncements/create">
                            Create anouncement
                        </Link>
                    </Button>
                )}
                {!!accessToken && (
                    <Button asChild>
                        <Link href="/logout">Logout</Link>
                    </Button>
                )}

                <ThemeToggle />
            </div>
        </header>
    );
};
