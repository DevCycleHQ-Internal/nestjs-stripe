import { stripeToken } from './../constants';
import { getStripeClient } from './../util';
export function createStripeProvider(options) {
    return {
        provide: stripeToken,
        useValue: getStripeClient(options),
    };
}
//# sourceMappingURL=createStripeProvider.js.map