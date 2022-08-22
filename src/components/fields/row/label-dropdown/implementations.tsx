import { $, component$ } from "@builder.io/qwik";
import { DropdownPropertyValues } from "./interfaces";
import { cssFormControl } from "../../basic-property";

export const DropdownGenerator = component$((props: DropdownPropertyValues) => {
    return (<>
        <select
            id={`${props.id}`}
            class={`${cssFormControl} ${props?.classes ? props?.classes : ""}`}
            onChange$={$((evt: Event) => { props.onTypeChanged$((evt.target as HTMLOptionElement).value) })}
        >
            <>
                {
                    props.options.map((option) => (
                        <option value={option.key}>
                            {option.value}
                        </option>
                    ))
                }
            </>
        </select>
    </>);
});