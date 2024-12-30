/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
import type { Pet, Pets } from ".././models";

export const getListPetsResponseMock = (): Pets =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 10 }) },
		(_, i) => i + 1,
	).map(() => ({
		id: faker.number.int({ min: undefined, max: undefined }),
		name: faker.string.alpha(20),
		tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
	}));

export const getShowPetByIdResponseMock = (
	overrideResponse: Partial<Pet> = {},
): Pet => ({
	id: faker.number.int({ min: undefined, max: undefined }),
	name: faker.string.alpha(20),
	tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
	...overrideResponse,
});

export const getListPetsMockHandler = (
	overrideResponse?:
		| Pets
		| ((
				info: Parameters<Parameters<typeof http.get>[1]>[0],
		  ) => Promise<Pets> | Pets),
) => {
	return http.get("*/pets", async (info) => {
		return new HttpResponse(
			JSON.stringify(
				overrideResponse !== undefined
					? typeof overrideResponse === "function"
						? await overrideResponse(info)
						: overrideResponse
					: getListPetsResponseMock(),
			),
			{ status: 200, headers: { "Content-Type": "application/json" } },
		);
	});
};

export const getCreatePetsMockHandler = (
	overrideResponse?:
		| void
		| ((
				info: Parameters<Parameters<typeof http.post>[1]>[0],
		  ) => Promise<void> | void),
) => {
	return http.post("*/pets", async (info) => {
		if (typeof overrideResponse === "function") {
			await overrideResponse(info);
		}
		return new HttpResponse(null, { status: 201 });
	});
};

export const getShowPetByIdMockHandler = (
	overrideResponse?:
		| Pet
		| ((
				info: Parameters<Parameters<typeof http.get>[1]>[0],
		  ) => Promise<Pet> | Pet),
) => {
	return http.get("*/pets/:petId", async (info) => {
		return new HttpResponse(
			JSON.stringify(
				overrideResponse !== undefined
					? typeof overrideResponse === "function"
						? await overrideResponse(info)
						: overrideResponse
					: getShowPetByIdResponseMock(),
			),
			{ status: 200, headers: { "Content-Type": "application/json" } },
		);
	});
};
export const getPetsMock = () => [
	getListPetsMockHandler(),
	getCreatePetsMockHandler(),
	getShowPetByIdMockHandler(),
];
