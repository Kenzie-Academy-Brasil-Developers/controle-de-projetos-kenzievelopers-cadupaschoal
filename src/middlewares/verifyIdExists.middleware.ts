import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { AppError } from "../error";

const verifyIdExists = async ( req: Request, res: Response, next: NextFunction):Promise<void> =>{
    if(req.baseUrl === "/projects" && req.method === "POST"){
        const query: any = await client.query(
            `SELECT * FROM developers WHERE id = $1;`,
            [req.body.developerId]
            );
        if(query.rowCount === 0){
            throw new AppError("Developer not found.",404);
        };
    
        return next();
    };

    const query: any = await client.query(
        `SELECT * FROM developers WHERE id = $1;`,
        [req.params.id]
        );
    if(query.rowCount === 0){
        if(req.baseUrl === "/developers"){

            throw new AppError("Developer not found.",404);
        };

        throw new AppError("Project not found.", 404);
    };


     return next();
};

export default verifyIdExists;