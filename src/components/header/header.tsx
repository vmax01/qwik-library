import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  const pathname = useLocation().pathname;

  return (
    <header>
      <div class="header-inner">
        <section class="logo" style={'text-align: right'}>
          <a href="/">
            <img
              alt="Library Logo"
              width={50}
              height={50}
              src="/logos/logo.png"
            />
          </a>
        </section>
      </div>
    </header>
  );
});
