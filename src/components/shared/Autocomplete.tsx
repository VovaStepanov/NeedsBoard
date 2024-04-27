"use client";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface AutocompletePropsType {
    items: {
        value: string;
        label: string;
    }[];
    name?: string;
    onChange: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompletePropsType> = ({
    items,
    name,
    onChange,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-neutral-400"
                >
                    {value
                        ? items.find((item) => item.value === value)?.label
                        : `Select ${name || "item"}...`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={`Search ${name || "item"}...`} />
                    <CommandEmpty>No {name || "item"} found.</CommandEmpty>
                    <CommandList>
                        {items.map((item) => (
                            <CommandItem
                                key={item.value}
                                value={item.value}
                                onSelect={(currentValue) => {
                                    setValue(
                                        currentValue === value
                                            ? ""
                                            : currentValue,
                                    );
                                    setOpen(false);
                                    onChange(currentValue);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                            ? "opacity-100"
                                            : "opacity-0",
                                    )}
                                />
                                {item.label}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
