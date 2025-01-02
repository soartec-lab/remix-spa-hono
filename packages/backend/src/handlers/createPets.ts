import { createFactory } from "hono/factory";
import type { CreatePetsContext } from "../api.context";
import { zValidator } from "../api.validator";
import { createPetsBody } from "../api.zod";

import { Pet } from "../models/pet";

const factory = createFactory();

export const createPetsHandlers = factory.createHandlers(
	zValidator("json", createPetsBody),
	async (c: CreatePetsContext) => {
		const pet = { name: "name" };

		await Pet.create({
			data: pet,
		});

		return c.json(pet);
	},
);
