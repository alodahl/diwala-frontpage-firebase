import { browserSupportsAllFeatures, loadScript } from './core/utilities/polyfill.functions';

if (!browserSupportsAllFeatures()) {
  loadScript('./js/polyfill.min.js', () => console.log('LOADED POLYFILL'));
}