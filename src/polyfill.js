import { shim as shimIncludes } from 'array-includes';
import { shim as shimPromise } from 'es6-promise';

if (!Array.prototype.find) {
  require('es6-shim');
}
if (!Array.prototype.includes) {
  shimIncludes();
}
if (!window.Promise) {
  shimPromise();
}
