import  {Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const handleError = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({message: err.message})
    };

    console.error(err);
    return res.status(500).json({ error: "Internal Server Error."});                  

};

export default handleError;