import { defineConfig } from "orval";

export default defineConfig({
	client: {
		input: {
			target: "../../openapi/merge.yml",
		},
		output: {
			mode: "tags-split",
			target: "app/client",
			schemas: "app/client/models",
			baseUrl: "${import.meta.env.VITE_API_BASE_URL || ''}",
			client: "swr",
			httpClient: "fetch",
			clean: true,
			biome: true,
			mock: {
				type: "msw",
				delay: false,
			},
			override: {
				useNamedParameters: true,
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
	zod: {
		input: {
			target: "../../openapi/merge.yml",
		},
		output: {
			mode: "tags-split",
			client: "zod",
			target: "app/client",
			fileExtension: ".zod.ts",
			biome: true,
			override: {
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
