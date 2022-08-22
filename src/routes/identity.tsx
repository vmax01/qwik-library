import { QRL, implicit$FirstArg } from '@builder.io/qwik';

export interface ActionLink {
    name: string | null | undefined;
    link: string | null | undefined;
}

export interface Identity {
    value: string | null | undefined;
    actions: ActionLink[] | null | undefined;
}

export async function identifyBarcode(barcode: string): Promise<Identity | null> {
    return await resolveMyPromise(barcode)
        .then((resp: Identity | null) => {
            if (Array.isArray(resp?.actions)) {
                return resp;
            } else {
                return Promise.reject({ errorMessage: "Expecting a list of actions" });
            }
        });
};

async function resolveMyPromise(barcode: string): Promise<Identity | null> {
    return await new Promise((resolve, reject) => {
        if (barcode != '') {
            setTimeout(() => {
                resolve({
                    value: barcode,
                    actions: [
                        { name: 'Create Staff', link: '/staff' } as ActionLink
                    ]
                } as Identity)
            }, 100);
        } else {
            resolve(null)
        }
    });
}

export function findCardQrl<Identity>(fn: QRL<(param: string) => Identity>, barcode: string): Promise<Identity> {
    return new Promise((resolve) => {
        resolve(
            fn(barcode)
                .then((result) => {
                    return result;
                })
        );
    });
}

export const findCard$ = implicit$FirstArg(findCardQrl);