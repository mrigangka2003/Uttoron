# Uttoron - A Learning Platform 🚀🎓

Uttoron is a comprehensive learning platform similar to Coursera, built with Node.js, TypeScript, and Express.

## Overview ✨

Uttoron allows users to access courses, track their learning progress, and provides administrators with tools to manage content and users. This repository contains the backend implementation of the platform.

> **Note for Beginners**: 🔰 This repository serves as an excellent example for those new to TypeScript and Node.js. The file structure and code organization follow best practices, making it an ideal learning resource to understand how to properly structure backend applications with TypeScript and Express.

## Tech Stack 💻

- **Node.js**: JavaScript runtime ⚙️
- **TypeScript**: Type-safe JavaScript 📝
- **Express.js**: Web framework 🌐
- **Mongoose**: MongoDB object modeling tool 🗄️
- **Nodemon**: Development utility for auto-restarting server 🔄

## Project Structure 📂

```
src/
├── config/
│   └── db.js           # Database configuration 🔌
├── middlewares/
│   ├── admin.ts        # Admin authentication middleware 🛡️
│   ├── user.ts         # User authentication middleware 🔐
│   └── index.ts        # Common middleware exports 📤
├── routes/
│   ├── admin.ts        # Admin routes 👨‍💼
│   ├── user.ts         # User routes 👤
│   ├── course.ts       # Course management routes 📚
│   └── index.ts        # Route aggregation 🔄
├── models/
│   └── schema.ts       # Database models/schemas 📋
├── constants.ts        # Application constants ⚙️
├── index.ts            # Application entry point 🚪
└── .env.sample         # Environment variables 🔑
```

## Getting Started 🏁

### Prerequisites 📋

- Node.js (v22 or higher) 💾
- npm or yarn 📦
- MongoDB 🍃

### Installation ⚙️

1. Clone the repository:
   ```
   git clone https://github.com/mrigangka2003/uttoron.git
   cd uttoron
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and copy contents from `.env.sample` 🔑

### Development 👨‍💻

Run the development server with hot-reload:
```
npm run dev
```
or
```
npx nodemon
```

### Production 🚀

Build the TypeScript project:
```
npm run build
```

Start the production server:
```
npm start
```

## Authentication 🔐

The application uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: req.cookies.token
```

## Contributing 🤝

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/amazing-feature`) 🌿
3. Commit your changes (`git commit -m 'Add some amazing feature'`) ✅
4. Push to the branch (`git push origin feature/amazing-feature`) 📤
5. Open a Pull Request 📩

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.