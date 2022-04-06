const stripe = require('stripe')('sk_test_51JgNqPFpi5VRFNSsa4kaDlTbxGxPfde9hdhD2Dp7LWMbbCa8nxqIZSv75Bwrx9zzDqKIbUAofHrithfJnOC65Kxg00JfdVhWbs');

export default async function handler(req, res) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: 'Purchase',
                    },
                    unit_amount: parseInt(req.query.amount, 10),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://tennis-checkout.netlify.app/thank-you',
        cancel_url: 'https://tennis-checkout.netlify.app',
    });

    res.redirect(303, session.url);
}