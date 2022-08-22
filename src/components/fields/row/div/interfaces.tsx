import { BasicHtmlProperties } from "../../basic-property";

export interface DivProperties extends BasicHtmlProperties {
}

export interface DivPropertyValues extends DivProperties {
    id: string;
    classes: string;
}