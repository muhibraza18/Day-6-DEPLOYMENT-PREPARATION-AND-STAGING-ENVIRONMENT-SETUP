
- User Browsing Products:
STEP 1: User visits the homepage.
STEP 2: User searches for a product or browses categories.
STEP 3: The frontend fetches product data from the Sanity CMS or third-party API (e.g., /products endpoint).
STEP 4: User selects a product to view details (price, description, images).
STEP 5: Frontend displays product details fetched from the SANITY.

- User Adds Product to Cart:
STEP 1: User clicks "Add to Cart" on a product page.
STEP 2: The frontend updates the cart state and makes a call to the backend to update the user's cart (POST request to /cart).
STEP 3: Cart items are stored in the session or database.
STEP 4: Cart total is recalculated based on the items added.

- User Places an Order:
STEP 1: User reviews cart and proceeds to checkout.
STEP 2: User enters shipping and payment details.
STEP 3: The frontend sends a POST request to create an order (e.g., /create-order endpoint).
STEP 4: Backend processes the order and triggers inventory updates.

- User Tracks Order Status:
STEP 1: After placing an order, user visits the "My Orders" page.
STEP 2: Frontend makes a GET request to /order-status/{orderId} to fetch the current status.
STEP 3: The frontend displays the current order status, such as "Processing," "Shipped," "Delivered."
