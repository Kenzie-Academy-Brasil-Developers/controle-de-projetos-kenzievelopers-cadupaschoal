import { QueryResult } from "pg"
interface IDevelopers {
    id: number,
    name: string,
    email: string
};

type TDevelopersCreate = Omit<IDevelopers,'id'>;
type TDevelopersResult = QueryResult<IDevelopers>;
type TDevelopersUpdate = Partial<TDevelopersCreate>;


export   { IDevelopers, TDevelopersCreate, TDevelopersResult, TDevelopersUpdate}