import { Router } from "express";
import { developersControllers } from "../controllers";
import middlewares from "../middlewares";

const developersRouter: Router = Router();

developersRouter.post(
  "",
  middlewares.uniqueEmail,
  developersControllers.create
);
developersRouter.get(
  "/:id",
  middlewares.verifyIdExists,
  developersControllers.retrieve
);
developersRouter.patch(
  "/:id",
  middlewares.verifyIdExists,
  middlewares.uniqueEmail,
  developersControllers.update
);
developersRouter.delete(
  "/:id",
  middlewares.verifyIdExists,
  developersControllers.erase
);
developersRouter.post(
  "/:id/infos",
  middlewares.verifyPreferredOS,
  middlewares.verifyIdExists,
  middlewares.verifyInfosExists,
  developersControllers.updateInfos
);

export default developersRouter;
