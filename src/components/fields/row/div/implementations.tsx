import { component$, Slot } from "@builder.io/qwik";
import { cssFormGroup, elementDropdown, elementInput, elementLabel } from "../../basic-property";
import { DivProperties, DivPropertyValues } from "./interfaces";


export function buildDivProperty(props: DivProperties): DivPropertyValues {
    const result = { id: props.id } as DivPropertyValues;


    if (props.classes) result.classes = props.classes;
    return result;
}

export const DivGenerator = component$((props: DivProperties) => {
    return (
        <>
            <div
                id={`${props.id}`}
                class={`${cssFormGroup} ${props?.classes ? props.classes : ""}`}
            >
                <Slot name={elementLabel} />
                <Slot name={elementInput} />
                <Slot name={elementDropdown} />
            </div>
        </>
    );
});