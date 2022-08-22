import { component$ } from '@builder.io/qwik';
import { LabelDropdownComponent } from '~/components/fields/row/label-dropdown';
import { LabelDropdownProperties } from '~/components/fields/row/label-dropdown/properties';
import { LabelInputComponent } from '~/components/fields/row/label-input';
import { LabelInputProperties } from '~/components/fields/row/label-input/properties';

export interface ContactPropertyValues {
    typeProps: LabelDropdownProperties;
    valueProps: LabelInputProperties;
    preferredProps: LabelInputProperties;
}

export interface ContactProperties {
    properties: ContactPropertyValues;
}

export const ContactDetailsComponent = component$((details: ContactProperties) => {
    return (
        <>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-contact">Contact Details</h3>
                </div>
                <div class="panel-body">
                    <LabelDropdownComponent
                        divProps={details.properties.typeProps.divProps}
                        labelProps={details.properties.typeProps.labelProps}
                        dropdownProps={details.properties.typeProps.dropdownProps}
                    />
                    <LabelInputComponent
                        divProps={details.properties.valueProps.divProps}
                        labelProps={details.properties.valueProps.labelProps}
                        inputProps={details.properties.valueProps.inputProps}
                    />
                    <LabelInputComponent
                        divProps={details.properties.preferredProps.divProps}
                        labelProps={details.properties.preferredProps.labelProps}
                        inputProps={details.properties.preferredProps.inputProps}
                    />
                </div>
            </div>
        </>
    );
});