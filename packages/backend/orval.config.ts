import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: {
			target: "../../openapi/merge.yml",
		},
		output: {
			target: "src/api.ts",
			mode: "split",
			client: "hono",
			biome: true,
			override: {
				hono: {
					handlers: "src/controllers",
				},
			},
		},
	},
});
