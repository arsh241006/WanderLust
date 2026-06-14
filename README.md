# WanderLust

A full-stack travel accommodation platform inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS.

## Features

- User Authentication & Authorization
- Create, Edit, and Delete Listings
- Add Reviews and Ratings
- Image Uploads with Cloudinary
- Interactive Maps
- Session Management with MongoDB Store
- Responsive UI

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- Passport.js
- Cloudinary
- Bootstrap

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

4. Start the server

```bash
npm start
```

## Author

Arshpreet Kaur
