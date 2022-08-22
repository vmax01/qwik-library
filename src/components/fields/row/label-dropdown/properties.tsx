import { DivPropertyValues } from "../div/interfaces";
import { LabelPropertyValues } from "../label/interfaces";
import { DropdownPropertyValues } from "./interfaces";

export interface LabelDropdownProperties {
    divProps: DivPropertyValues;
    labelProps: LabelPropertyValues;
    dropdownProps: DropdownPropertyValues;
}