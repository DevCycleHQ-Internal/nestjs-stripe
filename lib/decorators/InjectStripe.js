"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectStripe = InjectStripe;
const common_1 = require("@nestjs/common");
const constants_1 = require("./../constants");
function InjectStripe(name) {
    return (0, common_1.Inject)(name ?? constants_1.stripeToken);
}
//# sourceMappingURL=InjectStripe.js.map