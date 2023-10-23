import { buildLegacyTheme } from "sanity"

const props = {
  "--black": "#0D0D0D", 
  "--white": "#EEF1EF", 

  // TEST COLORS FROM HERE 

  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const newTheme = buildLegacyTheme({
  '--black': props['--black'],
  '--white': props['--white'],

  '--component-bg': props['--black'],
  '--component-text-color': props['--white'],

  '--gray': '#666',
  '--gray-base': '#666',

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
})