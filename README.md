# 🚀 Try Once - E-commerce Platform

A modern, full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Discover amazing products at unbeatable prices!

![Try Once](https://img.shields.io/badge/Try-Once-667eea?style=for-the-badge&logo=react&logoColor=white)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-764ba2?style=for-the-badge&logo=javascript&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

## ✨ Features

### 🛍️ User Features
- **Modern UI/UX** - Beautiful, responsive design with smooth animations
- **Product Browsing** - Search, filter, and sort products by category and price
- **Shopping Cart** - Add items, update quantities, and manage your cart
- **User Authentication** - Secure login/register with JWT tokens
- **Order Management** - Place orders and track order history
- **Product Details** - Detailed product pages with images and descriptions

### 🔧 Admin Features
- **Product Management** - Add, edit, and delete products
- **Inventory Control** - Real-time stock management
- **Image Upload** - Upload product images with drag-and-drop interface
- **Order Tracking** - View and manage customer orders
- **Admin Dashboard** - Comprehensive admin panel

### 🛡️ Security & Performance
- **JWT Authentication** - Secure user sessions
- **Role-based Access** - Admin-only product management
- **Input Validation** - Comprehensive form validation
- **Error Handling** - Graceful error management
- **Responsive Design** - Works on all devices

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Multer** - File uploads
- **bcryptjs** - Password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd try-once
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in both `server` and `client` directories:
   
   **server/.env:**
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/try_once
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:5176
   COOKIE_SECURE=false
   UPLOAD_PROVIDER=local
   ADMIN_EMAIL=admin@tryonce.com
   ADMIN_PASSWORD=admin123
   ```
   
   **client/.env:**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Database Setup**
   ```bash
   # Start MongoDB (if running locally)
   mongod
   
   # Seed the database with admin user and sample products
   cd server
   npm run seed:admin
   npm run seed:products
   npm run seed:more
   ```

5. **Start the application**
   ```bash
   # Terminal 1 - Start backend
   cd server
   npm run dev
   
   # Terminal 2 - Start frontend
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5176
   - Backend API: http://localhost:5000
   - Admin Login: admin@tryonce.com / admin123

## 📱 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/667eea/ffffff?text=Try+Once+Homepage)

### Product Management
![Admin Panel](https://via.placeholder.com/800x400/764ba2/ffffff?text=Admin+Panel)

### Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400/667eea/ffffff?text=Shopping+Cart)

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `GET /api/products/categories` - Get all categories

### Orders
- `POST /api/orders` - Place order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

## 🎨 Design System

### Colors
- **Primary**: Indigo (#667eea)
- **Secondary**: Purple (#764ba2)
- **Accent**: Pink (#ec4899)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: System UI stack
- **Headings**: Bold weights
- **Body**: Regular weights
- **Code**: Monospace

## 🔧 Development

### Project Structure
```
try-once/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── stores/        # Zustand stores
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── index.js       # Server entry point
│   └── package.json
└── README.md
```

### Available Scripts

**Backend:**
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run seed:admin` - Create admin user
- `npm run seed:products` - Add sample products
- `npm run seed:more` - Add more sample products

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **TailwindCSS** - For the utility-first CSS framework
- **MongoDB** - For the flexible database
- **Express.js** - For the robust web framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact us at support@tryonce.com.

---

<div align="center">
  <p>Made with ❤️ by the Try Once Team</p>
  <p>Discover amazing products at unbeatable prices!</p>
</div>

