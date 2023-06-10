import { Router } from "express";
import { projectsControllers } from "../controllers";
import middlewares from "../middlewares";

const projectsRouter = Router();

projectsRouter.post("",middlewares.verifyIdExists,projectsControllers.create);
projectsRouter.get("/:id",middlewares.verifyIdExists, projectsControllers.retrieve);
projectsRouter.patch("/:id", middlewares.verifyProjectIdExists, projectsControllers.update);

export default projectsRouter;