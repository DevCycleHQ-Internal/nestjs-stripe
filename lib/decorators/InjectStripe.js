import { Inject } from '@nestjs/common';
import { stripeToken } from './../constants';
export function InjectStripe(name) {
    return Inject(name ?? stripeToken);
}
//# sourceMappingURL=InjectStripe.js.map