import { createFactory } from "hono/factory";
import type { ListPetsContext } from "../api.context";
import { zValidator } from "../api.validator";
import { listPetsQueryParams, listPetsResponse } from "../api.zod";

const factory = createFactory();

export const listPetsHandlers = factory.createHandlers(
	zValidator("query", listPetsQueryParams),
	zValidator("response", listPetsResponse),
	async (c: ListPetsContext) => {},
);
