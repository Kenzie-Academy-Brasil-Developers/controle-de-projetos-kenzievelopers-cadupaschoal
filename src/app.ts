import "express-async-errors"
import "dotenv/config";
import express, { Application } from "express";
import { developersRouter } from "./routers";
import middlewares from "./middlewares";
import projectsRouter from "./routers/projects.routes";

const app: Application = express();
app.use(express.json());

app.use("/developers", developersRouter);
app.use("/projects",projectsRouter);
app.use(middlewares.handleError);

export default app;
