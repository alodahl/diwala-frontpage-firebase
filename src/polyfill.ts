import { shim as shimIncludes } from 'array-includes';
import { shim as shimPromise } from 'es6-promise';

if (!Array.prototype.find || !Set || !Map) {
  require('es6-shim');
}
if (!(<any> Array.prototype).includes) {
  shimIncludes();
}
if (!Promise) {
  shimPromise();
}