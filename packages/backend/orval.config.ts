import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: {
			target: "../../openapi/merge.yml",
		},
		output: {
			target: "src/api.ts",
			schemas: "src/handlers/schemas",
			mode: "split",
			client: "hono",
			biome: true,
			override: {
				hono: {
					handlers: "src/handlers",
				},
				zod: {
					strict: {
						response: true,
						query: true,
						param: true,
						header: true,
						body: true,
					},
					coerce: {
						response: true,
						query: true,
						param: true,
						header: true,
						body: true,
					},
				},
			},
		},
	},
});
