

# Project Overview

This is a fully functional e-commerce website built using modern web technologies. The platform allows users to browse products, search by categories, add items to the cart, and complete purchases using Stripe. An admin panel enables product management and order tracking.

- Tech Stack

Next.js - For building a fast, server-side rendered React application.

TypeScript - To enhance code maintainability and type safety.

Tailwind CSS - For a responsive and customizable UI design.

Sanity CMS - For content and product management.

Stripe API - For secure payment processing.

- Features

User Features:

View all products: Browse through a collection of products.

Search functionality: Find products based on keywords.

Category filter: Sort products by categories.

Cart management: Add, update, and remove products from the cart.

Checkout & Payment: Complete purchases using Stripe.

User Profile: Manage personal details and view past orders.

Admin Features:

Product Management: Add, update, and delete products using Sanity CMS.

Order Management: View and track all orders placed.

Dashboard UI: A responsive and visually appealing admin panel.

- Pages

/products - Displays all available products.

/admin - Admin panel for managing products and orders.

/profile - User profile page with order history.

/search - Allows searching for products by name or category.

/category/[id] - Filters products based on selected category.

/checkout - Displays order summary before payment.

/payment - Handles Stripe payment integration.

# Installation & Setup

Navigate to the project directory:

cd ecommerce-project

Install dependencies:

npm install

Run the development server:

npm run dev

Open the project in the browser:

http://localhost:3000

# Environment Variables

Create a .env.local file and add the following:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Deployment

Using Vercel for deployment my project

- Future Enhancements

  Implement authentication for user accounts.

  Improve order tracking with real-time updates.

  Add reviews and ratings for products.

Credits

Developed by Muhib Raza 🚀
