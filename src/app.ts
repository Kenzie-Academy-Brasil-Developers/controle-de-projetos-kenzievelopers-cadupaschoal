import "express-async-errors"
import "dotenv/config";
import express, { Application } from "express";
import { developersRouter,projectsRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(express.json());

app.use("/developers", developersRouter);
app.use("/projects",projectsRouter);
app.use(middlewares.handleError);

export default app;
