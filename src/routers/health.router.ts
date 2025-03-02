import express, {NextFunction, Request, Response} from "express";

const HealthRouter = express.Router();

HealthRouter.get("/ping", (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({message: "Pong"});
    }
)

export default HealthRouter