import { Request, Response } from "express";
import { developersServices } from "../services";
import { IDevelopers,TDevelopersCreate, TDevelopersUpdate,IDeveloperInfos } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const developers: TDevelopersCreate = await developersServices.create(req.body);
    return res.status(201).json(developers);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const developer:IDevelopers = await developersServices.retrieve(req.params.id);
    return res.status(200).json(developer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const developer: TDevelopersUpdate = await developersServices.update(req.body,req.params.id);
    return res.status(200).json(developer);
};

const erase = async (req: Request, res: Response): Promise<Response> => {
    await developersServices.erase(req.params.id);
    return res.status(204).send();
};

const updateInfos = async(req: Request, res: Response): Promise<Response> => {
    const developer: IDeveloperInfos = await developersServices.updateInfos(req.body, req.params.id);
    return res.status(201).json(developer);

};
export default { create, retrieve,update, erase, updateInfos };