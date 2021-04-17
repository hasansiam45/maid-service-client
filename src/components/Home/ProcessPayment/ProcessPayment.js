import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCard from '../SimpleCard/SimpleCard';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeCRsCba5qw5yhFc90Zwm8taRjfbdalkVlyeAIJMLsyTJiVUaV4d20DeU4Wlz8GOWKH7qBZyRGzK4T4skgUktT900ONP7anxT');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
      <div className="bg-dark text-white p-5 mt-5">
    <Elements  stripe={stripePromise}>
       <SimpleCard handlePaymentSuccess={handlePaymentSuccess}></SimpleCard>
     </Elements>
    </div>
  );
};

export default ProcessPayment;