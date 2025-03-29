import dotenv from "dotenv";
import path from "path";

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const MONGODB_URI = process.env.MONGODB_URI as string;
const PORT = process.env.PORT || 8000;
const DB_NAME = "uttora-a learning platform" as string;
const JWT_USER_SECRET = process.env.JWT_USER_SECRET as string;
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET as string;

export { 
    MONGODB_URI, 
    PORT, DB_NAME, 
    JWT_USER_SECRET, 
    JWT_ADMIN_SECRET 
};
