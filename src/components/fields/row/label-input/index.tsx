import { $, component$ } from "@builder.io/qwik";
import { elementInput, elementLabel, inputCheckbox, inputRadio } from "../../basic-property";
import { DivGenerator } from "../div/implementations";
import { LabelGenerator } from "../label/implementations";
import { InputGenerator } from "./implementations";
import { LabelInputProperties } from "./properties";

export const LabelInputComponent = component$((props: LabelInputProperties) => {
    return (
        <>
            <DivGenerator id={props.divProps.id} classes={props.divProps.classes}>
                <LabelGenerator
                    q:slot={elementLabel}
                    classes={props.labelProps.classes}
                    id={props.labelProps.id}
                    value={props.labelProps.value}
                />
                {(props.inputProps.iType == inputRadio || props.inputProps.iType == inputCheckbox) ? (<>
                    <InputGenerator
                        q:slot={elementInput}
                        id={props.inputProps.id}
                        classes={props.inputProps.classes}
                        iType={props.inputProps.iType}
                        placeholder={props.inputProps.placeholder}
                        onInputChanged$={$((param: string) => param)}
                        onInputClicked$={props.inputProps.onInputClicked$}
                    />
                </>) : (<>
                    <InputGenerator
                        q:slot={elementInput}
                        id={props.inputProps.id}
                        classes={props.inputProps.classes}
                        iType={props.inputProps.iType}
                        placeholder={props.inputProps.placeholder}
                        onInputChanged$={props.inputProps.onInputChanged$}
                        onInputClicked$={$((param: boolean) => param)}
                    />
                </>)
                }
            </DivGenerator>
        </>
    );
});