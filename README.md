# 🍔 BiteBlitz – Food Ordering Website

**BiteBlitz** is a modern, full-stack food ordering website built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless and responsive user experience, secure user authentication, dynamic cart management, and online payments via **Razorpay**.

---

## 🚀 Features

* 🔐 **Authentication**: Secure user login & registration with JWT.
* 🍽️ **Food Menu**: Browse and explore food items displayed in dynamic cards.
* 🛒 **Shopping Cart**: Add, remove, and manage your cart items easily.
* 💸 **Checkout with Razorpay**: Complete your order using Razorpay payment gateway.
* 📦 **Order History**: View previously placed orders stored in MongoDB.
* 🧾 **Admin-Free Design**: No admin panel required—ideal for MVPs and learning projects.
* ☁️ **MongoDB Database**: Stores user, cart, and order data securely.
* 🖼️ **Beautiful UI**: Styled using Bootstrap & custom CSS for a clean experience.

---

### 🏠 Home Page

![Home Page](https://github.com/user-attachments/assets/54fa02ff-2427-425c-ad90-10db72b3cc8a)

### 🍕 Menu Items

![Menu](https://github.com/user-attachments/assets/afc753d5-6c12-4324-ae60-871bf33ab15e)

### 🛍️ Cart Overview

![Cart](https://github.com/user-attachments/assets/631b668c-7274-4f62-bcc9-a50349f46b4f)

### 💳 Razorpay Checkout

![Razorpay](https://github.com/user-attachments/assets/8bf9f523-661a-4ae7-8f3f-1d800414a4cc)

### ✅ Order Confirmation

![Order Placed](https://github.com/user-attachments/assets/1cba9612-11e9-458e-bd80-2956b36e75cf)

### 📜 Order History

![History](https://github.com/user-attachments/assets/35b9219a-f24a-4bcd-b5b0-32f982d640a2)

---

## 🛠️ Tech Stack

| Layer        | Technology           |
| ------------ | -------------------- |
| **Frontend** | React.js, Bootstrap  |
| **Backend**  | Node.js, Express.js  |
| **Database** | MongoDB Atlas        |
| **Auth**     | JWT (JSON Web Token) |
| **Payments** | Razorpay             |

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

* Node.js & npm installed
* MongoDB Atlas URI
* Razorpay API keys
* Git

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/BiteBlitz.git
   cd BiteBlitz
   ```

2. **Install dependencies**

   * For frontend:

     ```bash
     cd client
     npm install
     ```
   * For backend:

     ```bash
     cd ../server
     npm install
     ```

3. **Create `.env` in `server/` and add:**

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   ```

4. **Start backend server**

   ```bash
   nodemon index.js
   ```

5. **Start frontend**

   ```bash
   cd client
   npm start
   ```

---

## 🧪 API Endpoints (Backend)

* `POST /api/createuser` – Register new user
* `POST /api/loginuser` – Login existing user
* `POST /api/razorpay/createOrder` – Create Razorpay order
* `POST /api/orderData` – Save order to DB
* `POST /api/myOrders` – Get past orders

---

## 🧠 Learnings

* Gained hands-on experience with full-stack MERN development
* Integrated third-party payments with Razorpay
* Implemented secure JWT-based authentication
* Designed and styled responsive React components

---

## 🤝 Contributing

We welcome contributions! If you want to:

* Add new features
* Improve performance or design
* Fix bugs

Then feel free to **open an issue** or **submit a pull request**. Let’s make BiteBlitz even better together!


---

