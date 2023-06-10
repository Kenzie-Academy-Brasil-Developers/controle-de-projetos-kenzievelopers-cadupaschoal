import format from 'pg-format';
import { IDevelopers, TDevelopersCreate,TDevelopersResult, TDevelopersUpdate } from '../interfaces';
import { client } from '../database';

const create = async (payload: TDevelopersCreate): Promise<IDevelopers> => {
    const queryFormat: string = format(
        "INSERT INTO developers (%I) VALUES (%L) RETURNING *;",
        Object.keys(payload),
        Object.values(payload)
    );
    const queryResult = await client.query(queryFormat);
    return queryResult.rows[0];
};

const retrieve = async (developerId: string): Promise<IDevelopers> => {
    const queryString: string = 
        `
        SELECT
        "d"."id" AS "developerId",
        "d"."name" AS "developerName",
        "d"."email" AS "developerEmail",
        "i"."developerSince" AS "developerInfoDeveloperSince",
        "i"."preferredOS" AS "developerInfoPreferredOS"
        FROM "developers" AS "d"
        LEFT JOIN "developerInfos" AS "i"
        ON "d".id = "i"."developerId"
        WHERE "d"."id" = $1; 
        `;

    const queryResult: TDevelopersResult = await client.query(queryString,[developerId]);
    
    return queryResult.rows[0];
};

const update = async (payload: TDevelopersUpdate, developerId: string): Promise<IDevelopers> => {
    const queryFormat = format(
        "UPDATE developers SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;",
        Object.keys(payload),
        Object.values(payload)
    );

    const query:any = await client.query(queryFormat,[developerId]);
    return query.rows[0];
};

const erase = async (developerId: string): Promise<void> => {
    const queryString = "DELETE FROM developers WHERE id = $1;"
    await client.query(queryString,[developerId]);

    return
    
};

const updateInfos = async (payload:object, developerId: string): Promise<any> => {
    const formtaedPayload = {...payload, developerId: developerId};
    const queryFormat = format(
       `INSERT INTO "developerInfos"  (%I) VALUES (%L) RETURNING *; `,
       Object.keys(formtaedPayload),
       Object.values(formtaedPayload) 
    );
    const query: any = await client.query(queryFormat);
    console.log(query.rows[0]);
    return query.rows[0];
};

export default { create, retrieve, update, erase, updateInfos }