"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStripeClient = getStripeClient;
const stripe_1 = __importDefault(require("stripe"));
const packageJson = require('./../../package.json');
function getStripeClient({ apiKey, appInfo = {
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
}, ...options }) {
    const stripeClient = new stripe_1.default(apiKey, {
        appInfo,
        ...options,
    });
    return stripeClient;
}
//# sourceMappingURL=getStripeClient.js.map