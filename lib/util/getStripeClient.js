import Stripe from 'stripe';
const packageJson = require('./../../package.json');
export function getStripeClient({ apiKey, appInfo = {
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
}, ...options }) {
    const stripeClient = new Stripe(apiKey, {
        appInfo,
        ...options,
    });
    return stripeClient;
}
//# sourceMappingURL=getStripeClient.js.map