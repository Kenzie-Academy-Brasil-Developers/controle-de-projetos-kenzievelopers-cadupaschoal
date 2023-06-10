import { QueryResult } from "pg";
interface IDevelopers {
    id: number,
    name: string,
    email: string
};

interface IDeveloperInfos {
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date | null,
    developerInfoPreferredOS: "Windows" | "MacOs" | "Linux"
};



type TDevelopersCreate = Omit<IDevelopers,'id'>;
type TDevelopersResult = QueryResult<IDevelopers>;
type TDevelopersUpdate = Partial<TDevelopersCreate>;


export   {  IDevelopers, 
            TDevelopersCreate, 
            TDevelopersResult, 
            TDevelopersUpdate, 
            IDeveloperInfos };