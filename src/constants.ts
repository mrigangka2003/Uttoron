import dotenv from "dotenv";
import path from "path";

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });


const MONGODB_URI = process.env.MONGODB_URI as string
const PORT = process.env.PORT || 8000;
const DB_NAME = "uttora-a learning platform" as string

export { MONGODB_URI, PORT, DB_NAME };
