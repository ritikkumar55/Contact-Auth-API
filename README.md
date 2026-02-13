
# 📇 Contact Management API (Full Authentication)

A production-ready Contact Management REST API built using Node.js, Express.js, and MongoDB, featuring JWT-based authentication and bcrypt password hashing.
The application enables users to register and log in securely and perform CRUD operations on contacts with user-specific authorization, ensuring that each user can only access their own data.

The backend has been fully Dockerized following production best practices. A multi-stage Docker build was implemented to optimize the image, achieving a ~14% reduction in image size (235MB → 203MB) by separating build-time and runtime dependencies. The application and database are orchestrated using Docker Compose, with MongoDB data persistence ensured through named Docker volumes to prevent data loss across container restarts.

Additionally, health checks were added to monitor service availability, and environment variables are managed securely to support different deployment environments. The overall setup is designed to be CI/CD ready, with future integration planned using Jenkins for automated builds, testing, and deployments.

---

## 🚀 Features

- 🔽 ~14% Docker image size reduction using multi-stage builds

- 💾 100% data persistence using MongoDB Docker volumes

- 🔐 JWT-secured APIs with authenticated CRUD operations

- ♻️ Zero data loss on container restart (docker-compose down/up)

- 🩺 Health checks implemented for backend and database readiness

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
├── .env
├── .dockerignore
├──  Dockerfile
├──  docker-compose.yml
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
MONGO_URI=mongodb://mongo:27017/contactdb
JWT_SECRET=your_jwt_secret_key

```

---

##  🐳 Docker Local Setup  and ▶️ Run the Project Locally

Clone the Project Repository

```bash
git clone ritikkumar55/Contact-Auth-API.git
cd contact-auth-api

```

Build and Run the Application with Docker Compose

```
docker-compose up --build -d

```

Verify Running Containers

```
docker ps

```
Output: 
```
contact-auth-api-api   Up (healthy)
mongo                  Up (healthy)

```
Test the Application
```
curl http://localhost:5000/health
Expected respose:
{ "status": "OK" }

```

---

##

```
```

## 🧠 Security Practices Used

- Password hashing with bcrypt
- JWT token expiration
- Protected routes with middleware
- User ownership verification for updates & deletes

---

## 🧩 Upcoming Enhancements

- Dockerize application using multi-stage builds ✅
- Docker Compose for API + MongoDB ✅
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
