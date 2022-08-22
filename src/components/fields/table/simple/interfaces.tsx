import { BasicHtmlProperties } from "../../basic-property";

export interface Heading {
    name: string;
}

export interface Row {
    columnHeadings?: Heading[];
    columnValues: any[];
}

export interface SimpleTableProperty extends BasicHtmlProperties {
    id: string;
    classes?: string;
    headings?: Heading[]
}

export interface SimpleTablePropertyValues {
    properties: SimpleTableProperty;
}