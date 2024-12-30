import { createFactory } from "hono/factory";
import type { CreatePetsContext } from "../api.context";
import { zValidator } from "../api.validator";
import { createPetsBody } from "../api.zod";

const factory = createFactory();

export const createPetsHandlers = factory.createHandlers(
	zValidator("json", createPetsBody),
	async (c: CreatePetsContext) => {},
);
