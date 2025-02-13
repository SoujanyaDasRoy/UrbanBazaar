# Routes

## Landing
- `/` - Landing page (Needs authentication to move forward)
- `/not-found` - Not found page

## 1. User Authentication Routes
These handle user registration, login, and account management:

- `POST /register` – User registration.
- `POST /login` – User login.
- `GET /profile` – View user profile.
- `PUT /profile` – Update user profile.
- `POST /logout` – User logout.

## 2. Product Routes
These handle product browsing, searching, and details:

- `GET /products` – List all products (with filters for categories, price, etc.).
- `GET /products/:id` – Get details of a specific product.
- `POST /products` – Add a new product (admin-only).
- `PUT /products/:id` – Update a product (admin-only).
- `DELETE /products/:id` – Delete a product (admin-only).

## 3. Category Routes
These handle product categorization:

- `GET /categories` – List all categories.
- `GET /categories/:id/products` – List products in a specific category.
- `POST /categories` – Add a new category (admin-only).
- `DELETE /categories/:id` – Delete a category (admin-only).

## 4. Cart Routes
These handle shopping cart functionality:

- `GET /cart` – View the user’s cart.
- `POST /cart` – Add a product to the cart.
- `PUT /cart/:id` – Update the quantity of a product in the cart.
- `DELETE /cart/:id` – Remove a product from the cart.

## 5. Order Routes
These handle order creation and management:

- `POST /orders` – Create a new order from the cart.
- `GET /orders` – List all orders for the user.
- `GET /orders/:id` – Get details of a specific order.
- `PUT /orders/:id` – Update order status (admin-only).

## 6. Bargain/Deal Routes
These handle bargain or discount features:

- `GET /deals` – List all active deals.
- `GET /deals/:id` – Get details of a specific deal.
- `POST /deals` – Add a new deal (admin-only).
- `DELETE /deals/:id` – Remove a deal (admin-only).

## 7. Payment Routes
These handle payment processing:

- `POST /payment` – Initiate a payment for an order.
- `GET /payment/:id` – Check payment status.

## 8. Review/Rating Routes
These handle user reviews and ratings:

- `POST /reviews` – Add a review for a product.
- `GET /products/:id/reviews` – Get reviews for a specific product.
- `DELETE /reviews/:id` – Delete a review (admin or user-only).

## 9. Admin Routes
These handle admin-specific actions:

- `GET /admin/users` – List all users (admin-only).
- `PUT /admin/users/:id` – Update user roles or status (admin-only).
- `GET /admin/orders` – List all orders (admin-only).
