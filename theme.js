import { buildLegacyTheme } from "sanity"

const props = {
  "--black": "#0D0D0D", 
  "--white": "#EEF1EF", 
  '--blue': '#15252d',
  '--red': '#db4437',
  '--yellow': '#f4b400',
  '--green': '#0f9d58',
}

export const newTheme = buildLegacyTheme({
  '--black': props['--black'],
  '--white': props['--white'],

  '--component-bg': props['--black'],
  '--component-text-color': props['--white'],

  '--gray': '#cfd7d6',
  '--gray-base': '#cfd7d6',

  /* Brand */
  '--brand-primary': props['--black'],

  // Default button
  '--default-button-color': '#cfd7d6',
  '--default-button-primary-color': props['--white'],
  '--default-button-success-color': props['--green'],
  '--default-button-warning-color': props['--yellow'],
  '--default-button-danger-color': props['--red'],

  /* State */
  '--state-info-color': props['--white'],
  '--state-success-color': props['--green'],
  '--state-warning-color': props['--yellow'],
  '--state-danger-color': props['--red'],

  /* Navbar */
  '--main-navigation-color': props['--black'],
  '--main-navigation-color--inverted': props['--white'],

  '--focus-color': props['--white'],
})