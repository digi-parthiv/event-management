import { Response } from "express";
import { HttpStatus } from "./http-status.util";

export const response = (res: Response, status: HttpStatus, message: string, data: any) => {
    res.status(status).json({
        success: status < 400,
        message: message,
        data: data
    })
}