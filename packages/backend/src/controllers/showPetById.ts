import { createFactory } from "hono/factory";
import type { ShowPetByIdContext } from "../api.context";
import { zValidator } from "../api.validator";
import {
	showPetByIdParams,
	showPetByIdQueryParams,
	showPetByIdResponse,
} from "../api.zod";

const factory = createFactory();

export const showPetByIdHandlers = factory.createHandlers(
	zValidator("param", showPetByIdParams),
	zValidator("query", showPetByIdQueryParams),
	zValidator("response", showPetByIdResponse),
	async (c: ShowPetByIdContext) => {},
);
