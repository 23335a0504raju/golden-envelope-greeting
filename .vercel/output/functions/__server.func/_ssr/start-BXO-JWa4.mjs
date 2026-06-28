import { n as createMiddleware, t as createStart } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-BXO-JWa4.js
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error("[middleware] unhandled error:", error);
		return new Response(`<!doctype html><html><body><h1>Something went wrong</h1><p><a href="/">Go home</a></p></body></html>`, {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware] }));
//#endregion
export { startInstance };
