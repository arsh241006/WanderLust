# WanderLust 🌍

A full-stack travel accommodation platform inspired by Airbnb, built using Node.js, Express.js, MongoDB Atlas, and EJS.

🔗 **Live Demo:** https://wanderlust-0rtj.onrender.com

## Features

- User Authentication & Authorization
- Create, Edit, and Delete Listings
- Add and Delete Reviews
- Image Uploads using Cloudinary
- Interactive Maps using Leaflet & OpenStreetMap
- Session Management with MongoDB Store
- Flash Messages and Form Validation
- Responsive UI with Bootstrap
- MongoDB Atlas Cloud Database
- Deployed on Render

## Tech Stack

### Frontend

- HTML
- CSS
- Bootstrap 5
- EJS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication & Security

- Passport.js
- Passport Local
- Express Session
- Connect Mongo

### Third-Party Services

- Cloudinary (Image Storage)
- OpenStreetMap
- Leaflet Maps
- Nominatim Geocoding API

## Project Structure

```text
WanderLust/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
│   ├── css/
│   └── js/
├── utils/
├── init/
├── app.js
├── cloudConfig.js
└── package.json
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/arsh241006/WanderLust.git
cd WanderLust
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

### Start the Application

```bash
npm start
```

Visit:

```text
http://localhost:8080
```

## Key Functionalities

### Listings

- Create new listings
- Edit existing listings
- Delete listings
- Upload listing images
- View listings on an interactive map

### Reviews

- Add reviews and ratings
- Delete reviews
- Review ownership validation

### Authentication

- User Registration
- Login & Logout
- Protected Routes
- Authorization Checks

## Deployment

The application is deployed on Render and uses MongoDB Atlas as its cloud database.

Live URL:

https://wanderlust-0rtj.onrender.com

## Future Improvements

- Search Functionality
- Category-Based Filtering
- Booking System
- Wishlist Feature
- User Profiles
- Dark Mode
- Map Style Switching
- Payment Gateway Integration

## Author

**Arshpreet Kaur**

GitHub: https://github.com/arsh241006

---

⭐ If you found this project useful, consider giving it a star on GitHub.
