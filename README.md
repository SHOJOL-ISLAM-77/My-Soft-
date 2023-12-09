
# Client-Side Readme

## Project Overview
This project involves the creation of a unique and user-friendly e-commerce website with a variety of features. It provides a seamless shopping experience for users, allowing them to browse products, add items to their cart, and make purchases. Here are some key points about the project:


- **Product Management:** Users can add new products to the website through the "Add Product" page, which is a protected route. The form includes fields for adding product details such as image, name, brand name, type, price, short description, and rating. 

- **Brand-Based Shopping:** The website offers brand-specific pages where users can explore products based on their preferred brand. These pages include a slider with advertisements and product listings. A unique feature is that one of the brand types may not have any available products, and a relevant message will be displayed on that brand page.

- **Authentication and User Profiles:** The website implements email and password-based authentication, with a registration and login page. Users can toggle between these views. Additionally, there's an option to log in with an external account (e.g., Facebook, GitHub, Google). Once logged in, the user's name, profile picture, and a logout button will appear on the navbar for easy access.

- **My Cart:** Users can view and manage their added products in the "My Cart" page, which is also a protected route. They can remove items from their cart as needed.

- **Product Details:** Clicking on a product's "Details" button will take the user to a product detail page, displaying in-depth information about the product. Users can also add the product to their cart from this page.

- **Responsive Error Handling:** The registration and login pages feature responsive error handling. Password requirements and login errors are clearly communicated to users, either below the input fields or via alert/toast notifications.

- **404 Page:** The website includes a custom 404 page for handling not-found errors, ensuring a smooth user experience.



## Key Features

- **Navbar**: Includes website name with logo, Home, Add Product, My Cart, and Login sections.
- **Homepage**: Features a navbar, banner, footer, and displays at least 6 brand names with respective images.
- **Additional Sections**: Two extra sections incorporated on the homepage to enrich user experience.
- **Add Product Page**: A private route facilitating users to add new products with essential details like image, name, brand, type, price, and more.
- **Brand-Specific Pages**: Clicking on a brand redirects users to a page exhibiting products of that brand, including a slider with ads and at least 4 products.
- **Product Details**: Each product route displays comprehensive details and includes an "Add to Cart" feature.
- **Cart Management**: Private route allowing users to view and delete added products from their cart.
- **Product Update Page**: A private route enabling users to update product information.
- **Authentication**: Implements email and password-based registration and login with error handling.
- **Error Handling**: Displays specific errors for password criteria and mismatched credentials using Firebase alerts or toasts.
- **Additional Login Option**: Offers an extra login choice (Facebook, GitHub, Google, etc.).
- **User Profile & Logout**: Displays user name, profile picture, and logout button on successful login.
- **404 Page**: Incorporates a "Not Found" page for invalid routes.
  
## Technologies Used

- **Frontend**: Utilizes React for client-side development.
- **Backend**: Employs Node.js and Express.js for server-side operations.
- **Database**: MongoDB for efficient data storage.
- **Authentication**: Firebase for user authentication and error messages.



**Live Link:** [https://mysoft-8e086.firebaseapp.com/]
