import { Category } from "../model/Category"
import { Icategory } from "../../../types/category.type"
import { Document } from "mongoose";

export const addCategory = async (): Promise<Icategory & Document | null> => {
    try {
        const category = new Category(category: Icategory);
        await category.save();
        return category;
    } catch (error: any) {
        throw error;
    }

}