import { Request, Response } from "express";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project = await projectsServices.create(req.body);
    return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.baseUrl);
    const projects = await projectsServices.retrieve(req.params.id);
    return res.status(200).json(projects);
}

export default { create, retrieve };