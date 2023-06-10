import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { AppError } from "../error";

const verifyProjectIdExists = async ( req: Request, res: Response, next: NextFunction):Promise<void> =>{
    
    const queryParam = await client.query(
        `SELECT * FROM  projects WHERE id = $1;`,
        [req.params.id]
    );

    if(queryParam.rowCount === 0){
        throw new AppError("Project not foung.", 404);
    };
    
    const query: any = await client.query(
            `SELECT * FROM developers WHERE id = $1;`,
            [req.body.developerId]
            );
        if(query.rowCount === 0){
            throw new AppError("Developer not found.",404);
        };
       
    
        return next();
};

export default verifyProjectIdExists;