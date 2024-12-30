/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Context, Env } from "hono";

import { ListPetsParams, Pets, ShowPetByIdParams } from "./handlers/schemas";

export type ListPetsContext<E extends Env = any> = Context<
	E,
	"/pets",
	{ in: { query: ListPetsParams }; out: { query: ListPetsParams } }
>;
export type CreatePetsContext<E extends Env = any> = Context<
	E,
	"/pets",
	{ in: { json: Pets }; out: { json: Pets } }
>;
export type ShowPetByIdContext<E extends Env = any> = Context<
	E,
	"/pets/:petId",
	{
		in: {
			param: {
				petId: string;
			};
			query: ShowPetByIdParams;
		};
		out: {
			param: {
				petId: string;
			};
			query: ShowPetByIdParams;
		};
	}
>;
