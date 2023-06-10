import { Request, Response } from "express";
import { projectsServices } from "../services";
import { IProject, IProjectRetrieve,TProjectUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project: IProject = await projectsServices.create(req.body);
    return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const projects: IProjectRetrieve = await projectsServices.retrieve(req.params.id);
    return res.status(200).json(projects);
};

const update = async (req: Request,res: Response): Promise<Response> => {
    const project: TProjectUpdate = await projectsServices.update(req.body, req.params.id);
    return res.status(200).json(project);
};

export default { create, retrieve, update };