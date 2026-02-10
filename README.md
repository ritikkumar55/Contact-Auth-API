
# 📇 Contact Management API (Full Authentication)

A production-ready **Contact Management REST API** built with **Express.js**, **MongoDB**, **JWT Authentication**, and **bcrypt password hashing**.  
The API allows users to **register, login**, and perform **CRUD operations on contacts** with **secure, user-based authorization**.

This project follows a **clean MVC architecture** and is structured to support **Dockerization and CI/CD pipelines (Jenkins)** in upcoming iterations.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Password Encryption using bcrypt
- Secure Contact CRUD APIs
- User-specific contact access
- Clean & scalable folder structure
- Ready for Docker & Jenkins integration

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT  
- **Security:** bcrypt  
- **Architecture:** MVC (Model–View–Controller)  
- **DevOps (Upcoming):** Docker, Jenkins CI/CD  

---

## 📂 Project Structure

```
contact-auth-api/
│
├── src/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Contact.js
│   ├── controllers/
│   │   ├── userController.js
│   │   └── contactController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── contactRoutes.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│
├── .env.example
├── package.json
├── README.md
```

---

## 🔐 API Endpoints

### 👤 User APIs

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user & get JWT |

---

### 📇 Contact APIs

| Method | Endpoint | Auth Required | Description |
|------|--------|---------------|------------|
| GET | `/api/contact/` | ❌ | Get all contacts |
| GET | `/api/contact/:id` | ❌ | Get contact by ID |
| POST | `/api/contact/new` | ✅ | Create new contact |
| PUT | `/api/contact/:id` | ✅ | Update contact |
| DELETE | `/api/contact/:id` | ✅ | Delete contact |
| GET | `/api/contact/userid/:id` | ❌ | Get contacts by user |

---

## 🔑 Authentication

Protected routes require a JWT token in the request header:

```
Authorization: Bearer <your_jwt_token>
```

---

## ⚙️ Environment Variables

Create a `.env` file using `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Project Locally

```bash
npm install
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🧠 Security Practices Used

- Password hashing with bcrypt
- JWT token expiration
- Protected routes with middleware
- User ownership verification for updates & deletes

---

## 🧩 Upcoming Enhancements

- Dockerize application using multi-stage builds
- Docker Compose for API + MongoDB
- Jenkins CI/CD pipeline
- Automated testing
- Deployment on AWS EC2

---

## 👨‍💻 Author

**Ritik Kumar**  
Backend & DevOps Enthusiast  

---

## 🏁 Notes

This project is structured in a **production-ready manner**, ensuring minimal refactoring when integrating **Docker and Jenkins CI/CD pipelines**.
