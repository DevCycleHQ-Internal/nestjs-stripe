const stripeModuleOptions = 'StripeModuleOptions';

export const getModuleOptionsToken = (name?: string) => name ? `${name}_${stripeModuleOptions}` : stripeModuleOptions
