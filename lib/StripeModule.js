var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StripeModule_1;
import { Module } from '@nestjs/common';
import { StripeCoreModule } from './StripeCoreModule';
let StripeModule = StripeModule_1 = class StripeModule {
    static forRoot(options) {
        return {
            module: StripeModule_1,
            imports: [StripeCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: StripeModule_1,
            imports: [StripeCoreModule.forRootAsync(options)],
        };
    }
};
StripeModule = StripeModule_1 = __decorate([
    Module({})
], StripeModule);
export { StripeModule };
//# sourceMappingURL=StripeModule.js.map