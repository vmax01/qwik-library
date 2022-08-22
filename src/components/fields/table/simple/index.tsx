import { component$ } from "@builder.io/qwik";
import { SimpleTableGenerator } from "./implementations";
import { SimpleTableProperty } from "./interfaces";

export const SimpleTableComponent = component$((props: SimpleTableProperty) => {

    return (
        <>
            <SimpleTableGenerator properties={props} />
        </>
    );
});