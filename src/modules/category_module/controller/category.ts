import { response } from "../../../utils/response.util";
import { addCategory } from "../service/category"
import { HttpStatus } from "../../../utils/http-status.util";
import { Icategory } from "../../../types/category.type";

export const addCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCategory = await addCategory(res.body as Icategory);
        response(res, HttpStatus.CREATED, "category added successfully", newCategory)
    } catch (error: any) {
        response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message, null)
    }
}