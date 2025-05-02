# Integrating Stripe Payment Gateway with Next.js 15 App Router

## Overview
This guide explains how to integrate the Stripe payment gateway into a Next.js 15 application using the App Router. It includes steps for setting up API routes, securely handling payments, and implementing a frontend for seamless payment processing.

---

## Steps to Integrate Stripe with Next.js 15 App Router

### 1. Install Stripe SDK
Install the required Stripe packages:

```bash
npm install stripe @stripe/stripe-js
```

---

### 2. Set Up API Route in Next.js
Create an API route to handle server-side logic securely. For example, create a file `app/api/create-payment-link/route.js`:

```javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Use environment variable for the secret key

export async function POST(req) {
  try {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Service Name',
            },
            unit_amount: 5000, // Amount in cents
          },
          quantity: 1,
        },
      ],
    });

    return new Response(JSON.stringify({ url: paymentLink.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

---

### 3. Secure API Keys
Store your Stripe secret key in a `.env.local` file:

```env
STRIPE_SECRET_KEY=your-secret-key
```

Never expose the secret key on the client side.

---

### 4. Frontend Integration
Use the API route to fetch the payment link and redirect the user. Example in a React component:

```javascript
'use client';

import { useState } from 'react';

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe payment page
      } else {
        console.error('Error creating payment link:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
}
```

---

### 5. Testing
- Use Stripe's test mode to simulate payments.
- Test the API route and frontend integration thoroughly.

---

### 6. Deployment
- Deploy your Next.js app to a platform like Vercel.
- Update the `.env` file with your live Stripe API keys.

---

By following these steps, you can integrate Stripe directly into your Next.js 15 application for secure and seamless payment processing.