import { Inject } from '@nestjs/common';
import { stripeToken } from './../constants';

export function InjectStripe(name?: string) {
  return Inject(name ?? stripeToken);
}
