import dotenv from 'dotenv';
dotenv.config();// configure dotenv or load environment variables or read from .env file

export const PORT= process.env.PORT || 3000
