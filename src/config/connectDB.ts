import mongoose from "mongoose";

export const connectDB = async (url: string): Promise<void> => {
    await mongoose.connect(url)
        .then(() => console.log('Connected to MongoDB'))
        .catch(error => console.error('MongoDB connection error:', error));
}

