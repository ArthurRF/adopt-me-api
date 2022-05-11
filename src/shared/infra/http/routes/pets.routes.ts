import { Router } from "express";

import { RateLimiterMiddleware } from "../middlewares/RateLimiterMiddleware";

const petsRoutes = Router();

petsRoutes.get("/", RateLimiterMiddleware, (req, res) => {
  return res.send('Hello Server');
});

export { petsRoutes };
