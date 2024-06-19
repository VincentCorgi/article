import express, { Express, Request, Response } from "express";
// import routes from "./routes";
// import errorHandler from "./util/middleware/errorHandler";
// import logger from "./util/middleware/logger";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(logger);

app.get("/", async (req: Request, res: Response) => {
  res.send("hello world");
});

// routes
// routes(app);

// error handler
// app.use(errorHandler);

export default app;
