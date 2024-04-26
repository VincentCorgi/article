import express, { Express, Request, Response } from "express";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req: Request, res: Response) => {
    res.send("hello corgi");
});

export default app;