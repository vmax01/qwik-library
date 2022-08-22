import { PropFunction } from "@builder.io/qwik";
import { BasicHtmlProperties } from "../../basic-property";

export interface DropdownOption {
    key: string;
    value: string;
}

export interface DropdownPropertyValues extends BasicHtmlProperties {
    id: string;
    classes?: string;
    options: DropdownOption[];
    onTypeChanged$: PropFunction<(params: any) => string>;
}