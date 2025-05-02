import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Add your Stripe Secret Key to .env.local

export async function POST(req) {
  try {
    const { amount, description, name, email } = await req.json(); // Extract data from the request body

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      phone_number_collection: {
        enabled: true,
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Adaptive Nexus Payment: ${name}`, // Use description as the product name
              description: description,
            },
            unit_amount: Math.round(amount * 100), // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Replace with your success page
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`, // Replace with your cancel page
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error) {
    console.error("Stripe API Error:", error.message);
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
