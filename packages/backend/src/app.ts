import { Hono } from "hono";

import routes from "./api";
import logger from "./middleweres/logger";

const app = new Hono();

app.use(logger());
app.route("/", routes);

export default app;
