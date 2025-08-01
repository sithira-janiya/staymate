# 🏠 Staymate Boarding Management System

A comprehensive MERN (MongoDB, Express.js, React.js, Node.js) web application designed to streamline boarding house management operations including tenant registration, room assignments, food ordering, payments, and attendance tracking.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎯 Current Features (Tenant Registration Module)
- ✅ **User Registration System** - Complete tenant registration with validation
- ✅ **Role-Based User Types** - Support for University Students, Employees, and Other boarders
- ✅ **Behavioral Screening** - Alcoholic/Non-Alcoholic/Other classification system
- ✅ **Security Features** - Password hashing with bcrypt, input validation
- ✅ **Database Integration** - MongoDB with Mongoose ODM
- ✅ **Responsive UI** - React-based frontend with form validation
- ✅ **RESTful API** - Express.js backend with proper error handling

### 🚧 Planned Features
- 🔄 **JWT Authentication & Login System**
- 📅 **Room Management & Assignment**
- 🍽️ **Food Menu & Ordering System**
- 💰 **Payment Management & Rent Tracking**
- 📊 **Admin Dashboard with Reports**
- 🚪 **Attendance & Access Control**
- 📧 **Email Notifications**
- 📱 **Mobile Responsive Design**

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI framework
- **Axios** - HTTP client for API communication
- **CSS3** - Styling and responsive design
- **HTML5** - Semantic markup

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing library
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Auto-restart development server
- **Git** - Version control
- **VS Code** - Recommended IDE

## 🏗️ Architecture Overview

The application follows a modern MERN stack architecture with clear separation of concerns:

- **Frontend:** React-based single-page application with component-based architecture
- **Backend:** RESTful API built with Express.js and Node.js
- **Database:** MongoDB with Mongoose ODM for data modeling
- **Authentication:** JWT-based authentication with bcrypt password hashing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MongoDB** (v4.0.0 or higher)
- **Git** (for version control)

### Check Your Versions:
```bash
node --version
npm --version
mongo --version  # or mongod --version
git --version
```

## 🍃 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/staymate-boarding-system.git
cd staymate-boarding-system
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configurations (see Environment Variables section)
nano .env  # or code .env

# Start MongoDB service (if not already running)
mongod

# Run backend server
npm run dev
```

**Backend will run on:** `http://localhost:5000`

### 3. Frontend Setup
```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

**Frontend will run on:** `http://localhost:3000`

## 🎮 Usage

### For End Users:
1. **Access the Application:** Open `http://localhost:3000` in your browser
2. **Register as Tenant:** Fill out the registration form with required information
3. **Submit Application:** Your registration will be saved and awaiting approval

### For Developers:
1. **API Testing:** Use tools like Postman to test API endpoints
2. **Database Monitoring:** Use MongoDB Compass to view database contents
3. **Code Development:** Make changes and see live updates with hot reload

## 🌐 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| POST | `/api/auth/register` | Register new tenant | ✅ Active |
| POST | `/api/auth/login` | User login | 🚧 Planned |
| GET | `/api/auth/profile` | Get user profile | 🚧 Planned |

### Example API Usage:

#### Register New User
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "nicNumber": "123456789V",
  "contactNumber": "+94712345678",
  "age": 22,
  "userType": "student",
  "behaviorType": "non-alcoholic"
}
```

#### Success Response:
```json
{
  "message": "User registered successfully! Awaiting approval.",
  "user": {
    "id": "60f7b1b3b3f1b40015a1b1b1",
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "userType": "student"
  }
}
```

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/staymate

# JWT Configuration (for authentication)
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
JWT_EXPIRE=30d

# Password Hashing
BCRYPT_SALT_ROUNDS=12

# CORS Configuration (optional)
FRONTEND_URL=http://localhost:3000
```

### Environment Variables Explanation:
- **PORT**: Server port number (default: 5000)
- **MONGODB_URI**: MongoDB connection string
- **JWT_SECRET**: Secret key for JSON Web Token signing
- **JWT_EXPIRE**: Token expiration time
- **BCRYPT_SALT_ROUNDS**: Password hashing complexity

## 🧪 Testing

### Manual Testing:
1. **Registration Flow:**
   - Fill out registration form
   - Verify form validation
   - Check database entry
   - Confirm success message

2. **API Testing:**
   ```bash
   # Test server health
   curl http://localhost:5000
   
   # Test registration endpoint
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test User","email":"test@example.com",...}'
   ```

## 🚨 Troubleshooting

### Common Issues:

#### Backend Server Won't Start
```bash
# Check if MongoDB is running
mongod

# Check if port 5000 is available
lsof -i :5000

# Clear npm cache
npm cache clean --force
```

#### Frontend Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Database Connection Issues
```bash
# Check MongoDB service status
brew services list | grep mongodb  # macOS
sudo systemctl status mongod        # Linux
```

## 🤝 Contributing

We welcome contributions to the Staymate project! Here's how you can help:

### Development Workflow:
1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test your changes thoroughly**
5. **Commit your changes:** `git commit -m 'Add amazing feature'`
6. **Push to the branch:** `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Contribution Guidelines:
- Follow the existing code style and structure
- Write clear, descriptive commit messages
- Test your changes before submitting
- Update documentation when necessary
- Be respectful and collaborative

### Areas for Contribution:
- 🐛 Bug fixes and improvements
- ✨ New feature development
- 📚 Documentation enhancements
- 🧪 Test coverage improvements
- 🎨 UI/UX enhancements

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Staymate Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Support & Contact

- **GitHub Issues:** [Report bugs or request features](https://github.com/your-username/staymate-boarding-system/issues)
- **Email:** support@staymate.com
- **Documentation:** [Project Wiki](https://github.com/your-username/staymate-boarding-system/wiki)

## 🙏 Acknowledgments

- **MongoDB** - For the excellent NoSQL database
- **React** - For the amazing frontend framework
- **Express.js** - For the robust backend framework
- **Node.js** - For the powerful JavaScript runtime
- **All Contributors** - For making this project better

---

**Made with ❤️ by the Staymate Team**

*Happy Coding! 🚀*