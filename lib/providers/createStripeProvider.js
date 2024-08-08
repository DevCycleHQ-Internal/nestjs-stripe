"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeProvider = createStripeProvider;
const constants_1 = require("./../constants");
const util_1 = require("./../util");
function createStripeProvider(options) {
    return {
        provide: options.name ?? constants_1.stripeToken,
        useValue: (0, util_1.getStripeClient)(options),
    };
}
//# sourceMappingURL=createStripeProvider.js.map