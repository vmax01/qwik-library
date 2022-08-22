import { PropFunction } from "@builder.io/qwik";
import { BasicHtmlProperties } from "../../basic-property";

export interface InputPropertyValues extends BasicHtmlProperties {
    id: string;
    classes?: string;
    placeholder?: string;
    iType?: 'text' | string;
    onInputChanged$?: PropFunction<(params: any) => any>;
    onInputClicked$?: PropFunction<(params: boolean) => boolean>;
}