import { component$ } from "@builder.io/qwik";
import { elementDropdown, elementLabel } from "../../basic-property";
import { DivGenerator } from "../div/implementations";
import { LabelGenerator } from "../label/implementations";
import { DropdownGenerator } from "./implementations";
import { LabelDropdownProperties } from "./properties";

export const LabelDropdownComponent = component$((props: LabelDropdownProperties) => {
    return (
        <>
            <DivGenerator id={props.divProps.id} classes={props.divProps.classes}>
                <LabelGenerator
                    q:slot={elementLabel}
                    classes={props.labelProps.classes}
                    id={props.labelProps.id}
                    value={props.labelProps.value}
                />
                <DropdownGenerator
                    q:slot={elementDropdown}
                    id={props.dropdownProps.id}
                    classes={props.dropdownProps.classes}
                    options={props.dropdownProps.options}
                    onTypeChanged$={props.dropdownProps.onTypeChanged$}
                />
            </DivGenerator>
        </>
    );
});