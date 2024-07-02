import dotenv from 'dotenv';
dotenv.config();// configure dotenv or load environment variables or read from .env file

export const config = {
  PORT: process.env.PORT || 3000,
  EMAIL_ID : process.env.EMAIL_ID,
  EMAIL_PASS : process.env.EMAIL_PASS,
}
