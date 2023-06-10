import { QueryResult } from "pg";

interface IProject {
    name: string,
    description: string,
    repository: string,
    statDate: Date,
    endDate: Date | null,
    developerId: number | null
};

interface IProjectRetrieve{
    projectId: number,
    projectName:string,
    projectDescription:string,
    projectRepository:string,
    projectStartDate:Date,
    projectEndDate: Date | null,
    projectDeveloperName:string
};

type TProjectUpdate = Partial<IProjectRetrieve>;
type TProjectResult = QueryResult<IProject>;

export { IProject, IProjectRetrieve, TProjectUpdate, TProjectResult };
