import type { MiddlewareHandler } from "hono";

export default function logger(): MiddlewareHandler {
	return async (c, next) => {
		console.log("[Dispatch Request]");
		await next();
	};
}
