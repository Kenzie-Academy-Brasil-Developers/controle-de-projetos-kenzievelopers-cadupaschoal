import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { AppError } from "../error";

const verifyInfosExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const queryString: string = `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`;
    const query: any = await client.query(queryString,[req.params.id]);

    if(query.rowCount !== 0){
        throw new AppError("Developer infos already exists.",409);
    };
    return next();
};

export default verifyInfosExists;