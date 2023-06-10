import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const verifyPreferredOS = (req: Request, res: Response, next: NextFunction): void => {
    const { preferredOS } = req.body;

    if(!preferredOS){
        return next();
    };

    if( preferredOS !== "Windows" && preferredOS !== "MacOS" && preferredOS !== "Linux"){
        throw new AppError("Invalid OS option.");
    };

    return next();

};

export default verifyPreferredOS;