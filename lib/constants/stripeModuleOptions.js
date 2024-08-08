"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleOptionsToken = void 0;
const stripeModuleOptions = 'StripeModuleOptions';
const getModuleOptionsToken = (name) => name ? `${name}_${stripeModuleOptions}` : stripeModuleOptions;
exports.getModuleOptionsToken = getModuleOptionsToken;
//# sourceMappingURL=stripeModuleOptions.js.map