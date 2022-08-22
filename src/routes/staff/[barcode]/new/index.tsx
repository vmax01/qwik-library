import { component$, $, implicit$FirstArg, QRL, useStore, useClientEffect$, useRef } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { cssTableRow, cssTableCell, elementDiv, divTableBody, inputCheckbox, elementInput, styleVisibility } from '~/components/fields/basic-property';
import { DivPropertyValues } from '~/components/fields/row/div/interfaces';
import { DropdownOption, DropdownPropertyValues } from '~/components/fields/row/label-dropdown/interfaces';
import { LabelDropdownProperties } from '~/components/fields/row/label-dropdown/properties';
import { InputPropertyValues } from '~/components/fields/row/label-input/interfaces';
import { LabelInputProperties } from '~/components/fields/row/label-input/properties';
import { LabelPropertyValues } from '~/components/fields/row/label/interfaces';
import { SimpleTableComponent } from '~/components/fields/table/simple';
import { Heading } from '~/components/fields/table/simple/interfaces';
import { ContactDetailsComponent, ContactPropertyValues } from './contact-details';
import { Person, Contact, Member } from './member-interfaces';
import { PersonalDetails, PersonalDetailsPropertyValues } from './personal-details';

export default component$(() => {
  const emptyPerson = { surname: '' } as Person;
  const emptyContact = { type: '' } as Contact;
  const emptyContactDetails = new Array<Contact>();


  const store = useStore({
    indicators: { tableVisible: false, dataAdded: false },
    person: emptyPerson,
    contact: emptyContact,
    contactList: emptyContactDetails
  }, { recursive: true });


  const member = {
    person: store.person,
    contact: store.contact,
  } as Member;


  /** Title Row Setup */
  const divTitleProps = { id: "divTitle" } as DivPropertyValues;
  const labelTitleProps = { id: "lblTitle", value: "Title" } as LabelPropertyValues;
  const inputTitleValues = { id: "iptTitle", iType: "text", onInputChanged$: $((param: string) => store.person.title = param) } as InputPropertyValues;

  const titleProps = {
    divProps: divTitleProps,
    labelProps: labelTitleProps,
    inputProps: inputTitleValues
  } as LabelInputProperties;


  /** Name Row Setup */
  const divNameProps = { id: "divName" } as DivPropertyValues;
  const labelNameProps = { id: "lblName", value: "Name" } as LabelPropertyValues;
  const inputNameValues = { id: "iptName", iType: "text", onInputChanged$: $((param: string) => store.person.name = param) } as InputPropertyValues;

  const nameProps = {
    divProps: divNameProps,
    labelProps: labelNameProps,
    inputProps: inputNameValues,
  } as LabelInputProperties;


  /** Surname Row Setup */
  const divSurnameProps = { id: "divSurname" } as DivPropertyValues;
  const labelSurnameProps = { id: "lblSurname", value: "Surname" } as LabelPropertyValues;
  const inputSurnameValues = { id: "iptSurname", iType: "text", onInputChanged$: $((param: string) => store.person.surname = param) } as InputPropertyValues;

  const surnameProps = {
    divProps: divSurnameProps,
    labelProps: labelSurnameProps,
    inputProps: inputSurnameValues,
  } as LabelInputProperties;


  /** Personal Details Properties Setup */
  const personalDetailsProperties = {
    titleProps: titleProps,
    nameProps: nameProps,
    surnameProps: surnameProps
  } as PersonalDetailsPropertyValues;


  /** Contact Type Row Setup */
  const divContactType = { id: "divType" } as DivPropertyValues;
  const labelContactType = { id: "lblType", value: "Type" } as LabelPropertyValues;

  const optionArray = new Array<DropdownOption>();
  optionArray.push({ key: 'select', value: '-- select --' } as DropdownOption);
  optionArray.push({ key: 'email', value: 'Email' } as DropdownOption);
  optionArray.push({ key: 'cell', value: 'Cell' } as DropdownOption);

  const dropdownValueProps = {
    id: "iptType",
    options: optionArray,
    onTypeChanged$: $((param: string) => store.contact.type = param)
  } as DropdownPropertyValues;


  /** Contact Value Row Setup */
  const divContactValue = { id: "divValue" } as DivPropertyValues;
  const labelContactValue = { id: "lblValue", value: "Value" } as LabelPropertyValues;
  const inputContactValue = { id: "iptValue", iType: "text", onInputChanged$: $((param: string) => store.contact.value = param) } as InputPropertyValues;


  /** Contact Prefer Row Setup */
  const divContactPrefer = { id: "divPrefer" } as DivPropertyValues;
  const labelContacPrefer = { id: "lblPrefer", value: "Preferred contact" } as LabelPropertyValues;
  const radioContactPrefer = { id: "iptPrefer", iType: "checkbox", onInputClicked$: $((param: boolean) => store.contact.preferred = param) } as InputPropertyValues;

  const contactTypeProps = { divProps: divContactType, labelProps: labelContactType, dropdownProps: dropdownValueProps } as LabelDropdownProperties;
  const contactValueProps = { divProps: divContactValue, labelProps: labelContactValue, inputProps: inputContactValue } as LabelInputProperties;
  const contactPreferProps = { divProps: divContactPrefer, labelProps: labelContacPrefer, inputProps: radioContactPrefer } as LabelInputProperties;

  const contactPropertyValue = {
    typeProps: contactTypeProps,
    valueProps: contactValueProps,
    preferredProps: contactPreferProps,
  } as ContactPropertyValues;

  const tableHeadings = new Array<Heading>();
  tableHeadings.push({ name: "Contact Type" } as Heading)
  tableHeadings.push({ name: "Contact Detail" } as Heading)
  tableHeadings.push({ name: "Main Contact" } as Heading)

  const outputRef = useRef();

  useClientEffect$(({ track }) => {
    track(store.indicators, 'dataAdded');

    if (store.indicators.dataAdded == true) {
      const newData = addContact$(addToTable, { contact: store.contact, contactList: store.contactList })
      newData.then((data) => {
        store.indicators.tableVisible = true;
        store.indicators.dataAdded = false;

        let tableBody = outputRef.current?.querySelector('.' + divTableBody);
        tableBody?.replaceChildren(document.createElement(elementDiv));

        data.contactList.forEach((contact) => {
          let newTableRow = document.createElement(elementDiv);
          newTableRow.className = cssTableRow;

          const tableCellDataClass = cssTableCell + ' divCellData';
          let newTableCellType = document.createElement(elementDiv);
          newTableCellType.className = tableCellDataClass;
          newTableCellType.textContent = contact.type;
          newTableRow.appendChild(newTableCellType);

          let newTableCellValue = document.createElement(elementDiv);
          newTableCellValue.className = tableCellDataClass;
          newTableCellValue.textContent = contact.value;
          newTableRow.appendChild(newTableCellValue);

          let newTableCellPrefer = document.createElement(elementDiv);
          newTableCellPrefer.className = tableCellDataClass;
          newTableRow.appendChild(newTableCellPrefer);

          let preferElement = document.createElement(elementInput);
          preferElement.type = inputCheckbox
          preferElement.checked = contact.preferred ? true : false;
          newTableCellPrefer.appendChild(preferElement);

          tableBody?.appendChild(newTableRow);
        });
      });
    }
  })

  return (
    <>
      <PersonalDetails
        member={member}
        properties={personalDetailsProperties}
      />

      <ContactDetailsComponent
        properties={contactPropertyValue}
      />

      <div>
        <div id="divButtons" style="text-align:right">
          <button type="button" class="btn btn-primary" onClick$={$(() => store.indicators.dataAdded = true)}>Add Contact</button>
        </div>
      </div>

      <hr style={`${styleVisibility}: ${store.indicators.tableVisible ? 'hidden' : 'visible'}`} />

      <div style={`${styleVisibility}: ${store.indicators.tableVisible ? 'visible' : 'hidden'}`} ref={outputRef} >
        <SimpleTableComponent id="tablePreferred" headings={tableHeadings} />
      </div>

      <hr />
      <div id="divButtons" style="text-align:right">
        <button type="button" class="btn btn-primary" onClick$={$(() => alert(JSON.stringify(member) + '\n\n' + JSON.stringify(store.contact)))}>Create Member</button>
        <button type="button" class="btn btn-link">Cancel</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Create Member',

};

export interface TableData {
  contactList: Array<Contact>;
  contact: Contact
}

export function addToTable(tableData: TableData): TableData {
  if (tableData.contact.preferred) {
    tableData.contactList.forEach((item) => item.preferred = false);
  } else {
    tableData.contact.preferred = false;
  }

  tableData.contactList.push(
    {
      type: tableData.contact.type,
      value: tableData.contact.value,
      preferred: tableData.contact.preferred
    } as Contact
  );

  return tableData;
}

export function addContactQrl<T>(fn: QRL<(data: TableData) => T>, lexicalData: TableData): Promise<T> {
  return new Promise((resolve) => {
    resolve(fn(lexicalData));
  });
}

export const addContact$ = implicit$FirstArg(addContactQrl);
