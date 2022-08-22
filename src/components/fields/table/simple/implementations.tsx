import { component$ } from "@builder.io/qwik";
import { cssBlueTable, divTableBody, cssTableCell, cssTableCellHeading, cssTableDiv, cssTableHeading, cssTableRow, cssTableRowHead } from "../../basic-property";
import { SimpleTablePropertyValues } from "./interfaces";

export const SimpleTableGenerator = component$((tableData: SimpleTablePropertyValues) => {
    return (<>
        <div
            style="border: 1px solid gray; color: royalblue; width:100%; margin-left:2rem; margin-right:2rem"
            id={tableData.properties.id}
            class={`${cssTableDiv} ${cssBlueTable} ${tableData.properties?.classes ? tableData.properties?.classes : ""}`}
        >
            <div class={cssTableHeading}>
                <div class={cssTableRow}>
                    {tableData.properties.headings?.map((heading) => (
                        <>
                            <div class={cssTableRowHead} style="border: 1px solid gray; text-align:center">{heading.name}</div>
                        </>
                    ))}
                </div>
            </div>
            <div class={divTableBody}>
                <div id="emptyRow" class={cssTableRow}>
                </div>
            </div>
        </div>
    </>);
});