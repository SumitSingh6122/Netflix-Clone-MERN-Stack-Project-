import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';

dotenv.config({
    path:"./.env"
})

export default function connectToDatabase() {
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}
