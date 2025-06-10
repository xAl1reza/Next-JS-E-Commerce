# 🌟 Next.js E-commerce Project 🚀

Welcome to an awesome e-commerce application built with \*Next.js ✨, styled with Tailwind CSS 🎨, and powered by a Laravel API 🛠️. This project includes a user-friendly panel, secure login with 2FA 🔐, dark/light theme support 🌙☀️, and a variety of pages like home, about, contact, and a filterable menu 🛒. It also features a shopping cart managed with Redux 📦 and a test payment page 💳. Let’s dive into the details and get this project up and running! 🎉

## ✨ Features

- Frontend: Crafted with Next.js and styled with Tailwind CSS for a sleek look. 🎨
- Backend: Powered by a robust Laravel API. 🛠️
- Theme Support: Fully responsive with dark 🌙 and light ☀️ modes.
- Pages:
  - 🏠 Home
  - ℹ️ About Us
  - 📞 Contact Us
  - 🍽️ Menu with advanced filtering capabilities
  - 🛒 Shopping cart (managed with Redux)
  - 💳 Test payment page
- User Authentication:
  - Secure login system with two-factor authentication (2FA) 🔐. Check the 2FA code in the `users` table in the database.
- Responsive Design: Looks great on all devices, from phones to desktops! 📱💻

## 🛠️ Prerequisites

Before you start, make sure you have these tools ready:

- XAMPP 🖥️: For running MySQL and PHP.
- Composer 🎼: For managing PHP dependencies.
- Node.js ⚡: For running the Next.js frontend.
- npm 📦: For installing frontend dependencies.

## 🔧 Back-end Setup

Let’s get the Back-end running! 🚀

1. Install XAMPP and Composer:

   - Ensure XAMPP is installed and running (Apache and MySQL services). ✅
   - Install Composer if you haven’t already. 🎵

2. Navigate to the Back-end Folder:

   - Open a terminal and go to the Back-end directory:
   - ```bash
     cd path/to/Back-end
     ```

3. Install Dependencies:

   - Run this command to install Laravel dependencies:
   - ```bash
     composer install
     ```

     🎉 Dependencies installed!

4. Set Up the Database:

   - Start the MySQL service in XAMPP.
   - Open phpMyAdmin (usually at `http://localhost/phpmyadmin`).
   - Create a new database named `nextjs_ecommerce`. 🗄️
   - Import the database tables from the SQL file into the `nextjs_ecommerce` database.

5. Run the Laravel API:
   - Start the Laravel server:
   - ```bash
     php artisan serve
     ```
   - Your API should now be live at `http://localhost:8000` (or another port if specified). 🌐

## 🌐 Front-end Setup

Now, let’s bring the Front-end to life! 🚀

1. Navigate to the Front-end Folder:

   - Open a new terminal and go to the Front-end directory:
   - ```bash
     cd path/to/Front-end
     ```

2. Install Dependencies:

   - Install the required Node.js packages:
   - ```bash
     npm install
     ```

     📦 Packages installed!

3. Run the Development Server:
   - Start the Next.js development server:
     npm run dev
   - The frontend should now be accessible at `http://localhost:3000` (or another port if specified). 🎉

## 📝 Additional Notes

- Two-Factor Authentication (2FA) 🔐:
  - During login, a 2FA code is required. Find the code in the `users` table of the `nextjs_ecommerce` database. 🔍
- Project Structure:
  - The Back-end folder contains the Laravel API code. 🛠️
  - The Front-end folder contains the Next.js application. 🌐
- Customization:
  - Ensure the API URL in the Front-end is set to point to the Laravel Back-end (e.g., update the API base URL in the frontend configuration if needed).
- Test Payment Page 💳:
  - The payment page is for testing only and does not process real transactions.

## 🎉 Running the Project

Once both the Back-end and Front-end\* serve

rs are up:

- Open your browser and go to `http://localhost:3000`. 🌐
- Use the login page to authenticate (check the database for 2FA codes if needed). 🔐
- Explore the home 🏠, about ℹ️, contact 📞, and menu 🍽️ pages, and test the cart 🛒 and payment 💳 features.

## 🐞 Troubleshooting

- \*Back-end Issues:
  - Double-check that the database is set up and the `.env` file is configured correctly. ✅
  - Ensure the Laravel server is running (`php artisan serve`). 🌐
- Front-end Issues:
  - Verify all dependencies are installed (`npm install`). 📦
  - Confirm the API URL in the Front-end matches the Back-end server address.
- 2FA Code\* 🔍:
  - If login fails, check the `users` table in the `nextjs_ecommerce` database for the correct 2FA code.

## 🤝 Contributing

Want to make this project even better? Fork it, submit issues, or create pull requests! For major changes, please open an issue first to discuss your ideas. 🌟

## 📜 License

This project is licensed under the MIT License. 📄

---

Happy coding! 🚀 Let’s build something amazing together! 😎
