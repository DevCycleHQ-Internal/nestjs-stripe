import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { getModuleOptionsToken, stripeToken } from './constants';
import {
  StripeAsyncOptions,
  StripeOptions,
  StripeOptionsFactory,
} from './interfaces';
import { createStripeProvider } from './providers';
import { getStripeClient } from './util';

@Global()
@Module({})
export class StripeCoreModule {
  public static forRoot(options: StripeOptions): DynamicModule {
    const provider = createStripeProvider(options);

    return {
      exports: [provider],
      module: StripeCoreModule,
      providers: [provider],
    };
  }

  static forRootAsync(options: StripeAsyncOptions): DynamicModule {
    const stripeProvider: Provider = {
      inject: [getModuleOptionsToken(options.name)],
      provide: options.name ?? stripeToken,
      useFactory: (stripeOptions: StripeOptions) =>
        getStripeClient(stripeOptions),
    };

    return {
      exports: [stripeProvider],
      imports: options.imports,
      module: StripeCoreModule,
      providers: [...this.createAsyncProviders(options), stripeProvider],
    };
  }

  private static createAsyncProviders(options: StripeAsyncOptions): Provider[] {
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

  private static createAsyncOptionsProvider(
    options: StripeAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: getModuleOptionsToken(options.name),
        useFactory: options.useFactory,
      };
    }

    return {
      inject: [options.useExisting || options.useClass],
      provide: getModuleOptionsToken(options.name),
      useFactory: (optionsFactory: StripeOptionsFactory) =>
        optionsFactory.createStripeOptions(),
    };
  }
}
