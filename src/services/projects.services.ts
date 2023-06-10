import format from 'pg-format';
import { client } from '../database';

const create = async (payload: any): Promise<any> => {
    const queyFormat = format(
        `INSERT INTO projects (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const query: any = await client.query(queyFormat);
    return query.rows[0];
};

const retrieve = async (projectId: string): Promise<any> => {
    const queryString = `SELECT 
    "p"."id" AS "projectId",
    "p"."name" AS "projectName",
    "p"."description" AS "projectDescription",
    "p"."repository" AS "projectRepository",
    "p"."startDate" AS "projectStartDate",
    "p"."endDate" AS "projectEndDate",
    "d"."name" AS "projectDeveloperName"
    FROM "projects" AS "p"
    RIGHT JOIN "developers" AS "d"
    ON "p"."developerId" = "d".id
    WHERE "p".id = $1
    `;

    const queryResult:any = await client.query(queryString,[projectId]);
    return queryResult.rows[0];
}

export default { create, retrieve };