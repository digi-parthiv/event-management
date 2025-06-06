import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB";
import categoryRoutes from "./modules/category_module/routes/category";
dotenv.config();
const url = process.env.MONGO_URL as string;
const port = process.env.PORT || 3000;
console.log(port, "port");
console.log(url, "url");
connectDB(url);

const app = express();
app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.send("hi from server.ts 12");
})
app.use('/api/category', categoryRoutes)
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})