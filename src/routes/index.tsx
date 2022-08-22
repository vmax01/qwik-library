import { component$, useStore, $, useWatch$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Identity, identifyBarcode, findCard$, ActionLink } from './identity';

export interface Barcode {
  value: string;
}

export interface IdentityState {
  scanned: boolean;
  identified: boolean;
  unidentified: boolean;
}

export default component$(() => {
  const card: Barcode = { value: '' };
  const rootStore = useStore<Barcode>(card);

  const identity = useStore<Identity>({} as Identity);
  const identityState: IdentityState = useStore({ scanned: false, identified: false, unidentified: false });

  useWatch$(({ track }) => {
    track(identity, 'actions');
  });

  return (
    <>
      <div style={`visibility: ${!identityState.identified ? 'visible' : 'hidden'}`}>
        <input
          type="text"
          size="30"
          value={rootStore.value}
          onKeyUp$={(event) => (rootStore.value = (event.target as HTMLInputElement).value)} />

        <button
          name="identify"
          onClick$={$(() => loadIdentity(rootStore.value, identity, identityState))}>
          Identify
        </button>
      </div>
      <div style={`visibility: ${identityState.identified ? 'visible' : 'hidden'}`}>
        {identity.actions?.map((action) =>
        (
          <>
            <a href={`${action.link}/${rootStore.value}/new`}>{action.name}</a>
          </>
        )
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'DDD Library - Scan Card',
};

export async function loadIdentity(barcode: string, identity: Identity, identityState: IdentityState) {
  const a = await findCard$(identifyBarcode, barcode);
  identity.actions = a?.actions;
  identityState.scanned = true;
  identityState.identified = true;
}