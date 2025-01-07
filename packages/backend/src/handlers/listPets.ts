import { createFactory } from "hono/factory";
import type { ListPetsContext } from "../api.context";
import { zValidator } from "../api.validator";
import { listPetsQueryParams, listPetsResponse } from "../api.zod";

import { Pet } from "../models/pet";

const factory = createFactory();

export const listPetsHandlers = factory.createHandlers(
	zValidator("query", listPetsQueryParams),
	zValidator("response", listPetsResponse),
	async (c: ListPetsContext) => {
		const pet = await Pet.findFirst({ where: { id: 1 } });

		console.log(pet?.displayName);

		return c.json([
			{
				id: pet?.id,
				name: pet?.name,
			},
		]);
	},
);
