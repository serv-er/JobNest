# 🧭 JobNest — MERN Stack Job Search Platform

JobNest is a full-stack job search web application built using the MERN stack. It enables seamless interaction between **job seekers** and **employers**, allowing users to register, post jobs, search for opportunities, and receive real-time notifications based on their preferences.

This project was developed during my MERN stack learning journey, inspired by a YouTube tutorial. While the UI is minimal, the backend functionality is robust, responsive, and production-ready.

---

## 🌐 Live Demo

Check out the live version of JobNest: [https://jobnest.onrender.com](https://jobnest-xrhg.onrender.com/)

---

## 🚀 Features

### 👤 User Roles
- **Job Seeker**: Register, update profile, select job niches, search jobs.
- **Employer**: Register, post jobs, manage listings.

### 🔔 Smart Notifications
- Implemented using `node-cron`.
- Job seekers receive automatic notifications when new jobs match their selected niches.

### 🧰 Core Functionalities
- JWT-based authentication and authorization.
- Profile management for both user types.
- File uploads using Cloudinary.
- RESTful API structure with modular routing.
- Newsletter automation via cron jobs.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Other Tools |
|----------|---------|----------|-------------|
| React (Vite) | Node.js, Express | MongoDB | Cloudinary, Node-Cron, Cookie Parser, Express FileUpload |

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jobnest.git
cd jobnest
```

### 2. Environment Variables

Create a `.env` file in the `backend/` folder:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_kEY=your_jwt_secret
JWT_EXPIRE
COOKIE_EXPIRE
SMTP_SERVICE=gmail

SMTP_MAIL=your_email_id

SMTP_PASSWORD=your_email_secret_key

SMTP_HOST=smtp.gmail.com

SMTP_PORT=465
```

### 3. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 4. Build Frontend

```bash
npm run build
```

Move the `dist/` folder to `backend/public/`.

### 5. Start the Server

```bash
cd ../backend
npm start
```

Visit: [http://localhost:4000](http://localhost:4000)

---

## 📬 Future Improvements

- Revamp the UI for better user experience.
- Add pagination and filtering to job listings.
- Implement email notifications.
- Add admin dashboard for analytics.

---

## 🙌 Acknowledgements

This project was inspired by a YouTube tutorial and built as part of my MERN stack learning journey. Special thanks to the open-source community for the tools and resources.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
