# SunCart

SunCart is a summer essentials eCommerce app built with Next.js App Router. Users can browse seasonal products, view protected product details, place a simple order action after authentication, and manage their profile.

## Purpose

The project demonstrates a responsive summer store for sunglasses, outfits, skincare, beach accessories, and daily summer essentials using static product data and BetterAuth authentication.

## Live URL

Add your deployed URL here after hosting on Vercel or another Next.js-compatible platform.

## Key Features

- Persistent navbar and footer across App Router routes
- Responsive Home, Products, Product Details, Login, Register, Profile, and Update Profile pages
- Static JSON product catalog with 6 summer products
- Home hero banner, popular products, summer care tips, and top brands
- Protected product details route with redirect back after login
- BetterAuth email/password authentication
- Google social login through BetterAuth environment variables
- Logged-in profile data with name, email, photo, and update form
- Animate.css animations on page/product sections

## Packages Used

- `next`
- `react`
- `tailwindcss`
- `daisyui`
- `better-auth`
- `mongodb`
- `animate.css`
- `react-icons`

## Environment Variables

Create `.env.local` from `.env.example` and fill in the real values:

```bash
MONGODB_URI=
MONGODB_DB=suncart
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Do not commit `.env.local`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```
