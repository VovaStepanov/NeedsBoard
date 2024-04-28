"use client";

import {
    MultiSelector,
    MultiSelectorContent,
    MultiSelectorInput,
    MultiSelectorItem,
    MultiSelectorList,
    MultiSelectorTrigger,
} from "../ui/multiselect";

interface ItemType {
    value: string;
    label: string;
}

interface MultiSelectPropsType {
    value?: string[];
    onChange: (value: string[]) => void;
    items: string[];
}

export const MultiSelect: React.FC<MultiSelectPropsType> = ({
    value,
    onChange,
    items,
}) => {
    return (
        <MultiSelector
            values={items}
            onValuesChange={onChange}
            loop
            className="max-w-xs"
        >
            <MultiSelectorTrigger>
                <MultiSelectorInput placeholder="Select your framework" />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
                <MultiSelectorList>
                    {items.map((item) => (
                        <MultiSelectorItem value={item} key={item}>
                            React
                        </MultiSelectorItem>
                    ))}
                </MultiSelectorList>
            </MultiSelectorContent>
        </MultiSelector>
    );
};
