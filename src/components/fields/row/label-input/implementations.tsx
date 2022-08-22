import { $, component$ } from "@builder.io/qwik";
import { InputPropertyValues } from "./interfaces";
import { cssFormControl, cssFormControlRadio, inputCheckbox, inputRadio } from "../../basic-property";

export const InputGenerator = component$((props: InputPropertyValues) => {
    let inputClass = (props.iType == inputRadio || props.iType == inputCheckbox) ? cssFormControlRadio : cssFormControl;
    return (<>
        {(props.iType == 'radio' || props.iType == 'checkbox') ? (<>
            <input
                id={`${props.id}`}
                type={`${props.iType}`}
                class={`${inputClass} ${props?.classes ? props?.classes : ""}`}
                placeholder={`${props.placeholder ? props.placeholder : ""}`}
                onClick$={$((evt: Event) => { props.onInputClicked$ ? props.onInputClicked$((evt.target as HTMLInputElement).checked) : (evt.target as HTMLInputElement).checked })}
            />

        </>) : (<>
            <input
                id={`${props.id}`}
                type={`${props.iType}`}
                class={`${inputClass} ${props?.classes ? props?.classes : ""}`}
                placeholder={`${props.placeholder ? props.placeholder : ""}`}
                onChange$={$((evt: Event) => { props.onInputChanged$ ? props.onInputChanged$((evt.target as HTMLInputElement).value) : (evt.target as HTMLInputElement).value })}
            />
        </>)
        }
    </>);
});