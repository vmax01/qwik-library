import { component$ } from "@builder.io/qwik";
import { LabelPropertyValues } from "./interfaces";

export const LabelGenerator = component$((props: LabelPropertyValues) => {
    return (
        <>
            <label
                id={`${props.id}`}
                class={`${props?.classes ? props.classes : ""}`}
                for={`${props.forTarget}`}
            >
                {props.value}
            </label>
        </>
    );
});