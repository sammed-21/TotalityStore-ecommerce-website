## Implementation Details

This e-commerce website project successfully implements all the tasks outlined in the challenge instructions:
## Tech Stack

This e-commerce website project was built using the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript for improved code quality.
- **Recoil**: A state management library for managing global application state.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and clean user interfaces.
- **Google OAuth**: Used for implementing user authentication with Google sign-in.

These technologies were carefully chosen to ensure a robust, maintainable, and user-friendly web application.
## Installation

1. Clone this repository:

```bash
git clone https://github.com/sammed-21/totalitycorp-frontend-challenge.git
```
```bash
cd e-commerce-website
```
```bash
.env.local file add you google client id

VITE_CLIENT_ID=""  
```
```bash
npm install
```
```bash
npm run dev
```
```bash
open Browser http://localhost:5173/
```
### Product Listing

- We fetch product data from the [FakeStoreAPI](https://fakestoreapi.com/) to display a variety of products with images, names, prices, and "Add to Cart" buttons.
- Implemented filters to allow users to sort products by category, price range, or ratings.

### Shopping Cart

- Implemented a cart section that displays the added products, quantities, and total cost.
- Users can easily increase, decrease, or remove items from the cart.
- Real-time updates of the cart total and item count are displayed using Recoil state management.

### Checkout

- A comprehensive checkout process calculates the total cost of items in the cart.
- Users can conveniently enter their shipping information and payment details.

### User Authentication (Optional)

- Provided user registration and login functionalities.
- Displayed the user's name and avatar when logged in.
- Implemented Google OAuth for quick and secure sign-in.
- Added a logout feature for users.

### Responsive Design

- Ensured that the website is fully responsive, offering a seamless experience on both desktop and mobile devices.
- Optimized the layout for various screen sizes using Tailwind CSS.

This project is a complete and functional e-commerce website that meets all the specified requirements.
