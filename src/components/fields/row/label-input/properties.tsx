import { DivPropertyValues } from "../div/interfaces";
import { LabelPropertyValues } from "../label/interfaces";
import { InputPropertyValues } from "./interfaces";

export interface LabelInputProperties {
    divProps: DivPropertyValues;
    labelProps: LabelPropertyValues;
    inputProps: InputPropertyValues;
}