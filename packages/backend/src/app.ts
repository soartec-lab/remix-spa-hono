import { Hono } from "hono";

import routes from "./api";

const app = new Hono();

app.route("/", routes);

export default app;
