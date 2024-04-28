import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./routes";
const app: Express = express();
const logger =
    (req: Request, res: Response, next: NextFunction) => {
      const timestamp = new Date().toLocaleTimeString();
      const {method, originalUrl} = req;
      console.log(`${timestamp} ${method} ${originalUrl} `);
      if (Object.keys(req.body).length !== 0) console.log(`Body: ${JSON.stringify(req.body)}`);
      if (Object.keys(req.params).length !== 0) console.log(`Params: ${JSON.stringify(req.params)}`);
      if (Object.keys(req.query).length !== 0) console.log(`Query: ${JSON.stringify(req.query)}`);
      next();
    };

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.get("/", async (req: Request, res: Response) => {
  res.send("hello world");
});
// routes
routes(app);

export default app;
