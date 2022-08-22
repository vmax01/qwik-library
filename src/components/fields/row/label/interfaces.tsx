import { BasicHtmlProperties } from "../../basic-property";

export interface LabelPropertyValues extends BasicHtmlProperties {
    id: string;
    forTarget?: string;
    classes: string;
    value: string;
}