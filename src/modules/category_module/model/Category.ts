import mongoose from "mongoose";
import { Document } from "mongoose";

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const Category = mongoose.model("Category", categoryModel);