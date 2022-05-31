import { Router, Request, Response } from 'express';
const route = Router();
/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
route.get('/healthcheck', (req: Request, res: Response) => res.send(200));
export default route;
