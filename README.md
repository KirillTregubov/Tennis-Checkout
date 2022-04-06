# Tennis Checkout
Created by [Kirill Tregubov](https://github.com/KirillTregubov) and [Arjun Sahni](https://github.com/Sahni-Arjun)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c0631e0-16cb-4b33-b930-ec49bbbda622/deploy-status)](https://app.netlify.com/sites/tennis-checkout/deploys)

[Open Live Site](https://tennis-checkout.netlify.app)

## Get Started

First, clone the repository. Make sure you have [`Node`](https://nodejs.org/en/) installed.
Install/upgrade yarn using:
```bash
npm install --global yarn
```

### Run the development server ###
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run unit tests ###
```bash
yarn test
```

Read the command line output to see whether the tests passed or failed.

## Deploy this repo
Deploy this website using Netlify, which is also the host supporting the live site.

[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KirillTregubov/Tennis-Checkout)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Website Interface

### Homepage (/) ###
The home page is where you can browse our selection of items and click on them to add them to cart. You should get a toast in the bottom right informing you that your item was added to cart successfully.

### Cart (/checkout) ###
The checkout page is where you can see which items you have added to your cart, adjust the quantities or remove them, see the total and all relevant information, add a discount, and checkout using Stripe. The valid discount code are 'code1', 'CODE', and 'tennis7' these correspond to a 5, 10 and 20% discount respectively

### Stripe Checkout ###
Please do not input your financial information, instead use the following test data:
```
4242 4242 4242 4242
04/24 424
```

### Thank you (/thank-you) ###
Once your checkout is complete, you will be redirected to the Thank you page and thanked for your purchase.
