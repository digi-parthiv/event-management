import express from "express";
import { addCategoryController } from "../controller/category";

const routes = express.Router();
routes.post('/', addCategoryController);

export default routes;