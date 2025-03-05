# Gym Management System

## Project Overview
The **Gym Management System** is a web-based application developed using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. This system is designed to manage gym memberships, track payments, send notifications, and provide an efficient way for gym owners and members to interact. It eliminates the need for paper-based receipts and manual record-keeping by digitalizing the entire process.

## Features
### Admin Panel:
- **User Authentication**: Secure login and role-based access control.
- **Member Management**: Add, update, delete, and search gym members.
- **Billing System**: Generate and manage payment receipts and notifications.
- **Fee Package Assignment**: Assign different fee structures to members.
- **Reports & Analytics**: Generate reports on membership, payments, and attendance.
- **Notifications**: Send reminders for membership renewals and fee payments.
- **Supplement Store (Future Scope)**: Integrate a store for fitness supplements.
- **Diet & Workout Plans**: Assign customized diet and exercise plans.

### Member Panel:
- **Dashboard**: View profile, membership status, and notifications.
- **View Bills & Receipts**: Access digital copies of all payments.
- **Workout & Diet Plan Access**: View assigned workout and nutrition plans.
- **Attendance Tracking**: Monitor check-ins and workout sessions.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=14.x)
- **MongoDB** (Local or Cloud-based, e.g., MongoDB Atlas)
- **Git** (for version control)

### Steps to Run Locally
#### 1. Clone the Repository
```sh
 git clone https://github.com/yourusername/gym-management-system.git
 cd gym-management-system
```
#### 2. Install Dependencies
##### Backend (Express + Node.js)
```sh
 cd backend
 npm install
```
##### Frontend (React + Tailwind CSS)
```sh
 cd frontend
 npm install
```
#### 3. Configure Environment Variables
Create a **.env** file in the backend folder and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
#### 4. Start the Application
##### Start Backend Server
```sh
 cd backend
 nodemon app.js
```
##### Start Frontend Server
```sh
 cd frontend
 npm run dev
```

### Running in Production
- **Frontend**: Deploy on **Vercel/Netlify**
- **Backend**: Deploy on **Render/Heroku**
- **Database**: Use **MongoDB Atlas** for cloud storage

## Use Cases
- **Gym Owners**: Manage memberships, payments, and notifications.
- **Trainers**: Assign workout plans and track progress.
- **Gym Members**: View bills, attendance, and workout schedules.

## Future Enhancements
- AI-powered workout recommendations
- Mobile app integration
- Payment gateway for online transactions

## Conclusion
The **Gym Management System** simplifies gym operations, enhances user experience, and provides a scalable solution for managing memberships efficiently. With **real-time notifications, automated billing, and analytics**, this system ensures hassle-free management for gym owners and members.


🚀 **Happy Coding!** 🎉

