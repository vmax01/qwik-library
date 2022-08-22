import { component$, useWatch$, useStore } from '@builder.io/qwik';
import { LabelInputComponent } from '~/components/fields/row/label-input';
import { LabelInputProperties } from '~/components/fields/row/label-input/properties';
import { Member } from './member-interfaces';

export interface PersonalDetailsPropertyValues {
    titleProps: LabelInputProperties;
    nameProps: LabelInputProperties;
    surnameProps: LabelInputProperties;
}

export interface PersonalDetailsProperties {
    member: Member;
    properties: PersonalDetailsPropertyValues;
}

export const PersonalDetails = component$((details: PersonalDetailsProperties) => {
    return (
        <>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Personal Details</h3>
                </div>
                <div class="panel-body">
                    <LabelInputComponent
                        divProps={details.properties.titleProps.divProps}
                        labelProps={details.properties.titleProps.labelProps}
                        inputProps={details.properties.titleProps.inputProps}
                    />
                    <LabelInputComponent
                        divProps={details.properties.nameProps.divProps}
                        labelProps={details.properties.nameProps.labelProps}
                        inputProps={details.properties.nameProps.inputProps}
                    />
                    <LabelInputComponent
                        divProps={details.properties.surnameProps.divProps}
                        labelProps={details.properties.surnameProps.labelProps}
                        inputProps={details.properties.surnameProps.inputProps}
                    />
                </div>
            </div>
        </>
    );
});
