var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StripeCoreModule_1;
import { Global, Module } from '@nestjs/common';
import { stripeModuleOptions, stripeToken } from './constants';
import { createStripeProvider } from './providers';
import { getStripeClient } from './util';
let StripeCoreModule = StripeCoreModule_1 = class StripeCoreModule {
    static forRoot(options) {
        const provider = createStripeProvider(options);
        return {
            exports: [provider],
            module: StripeCoreModule_1,
            providers: [provider],
        };
    }
    static forRootAsync(options) {
        const stripeProvider = {
            inject: [stripeModuleOptions],
            provide: options.name ?? stripeToken,
            useFactory: (stripeOptions) => getStripeClient(stripeOptions),
        };
        return {
            exports: [stripeProvider],
            imports: options.imports,
            module: StripeCoreModule_1,
            providers: [...this.createAsyncProviders(options), stripeProvider],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: stripeModuleOptions,
                useFactory: options.useFactory,
            };
        }
        return {
            inject: [options.useExisting || options.useClass],
            provide: stripeModuleOptions,
            useFactory: (optionsFactory) => optionsFactory.createStripeOptions(),
        };
    }
};
StripeCoreModule = StripeCoreModule_1 = __decorate([
    Global(),
    Module({})
], StripeCoreModule);
export { StripeCoreModule };
//# sourceMappingURL=StripeCoreModule.js.map