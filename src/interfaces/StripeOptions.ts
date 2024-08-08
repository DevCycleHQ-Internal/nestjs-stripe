import Stripe from 'stripe';

export interface StripeOptions extends Stripe.StripeConfig {
  readonly apiKey: string;
  readonly name?: string
}
