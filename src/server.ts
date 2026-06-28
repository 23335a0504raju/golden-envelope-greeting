type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      return await handler.fetch(request, env, ctx);
    } catch (error) {
      console.error("[server] unhandled error:", error);
      return new Response(
        `<!doctype html><html><body><h1>Something went wrong</h1><p><a href="/">Go home</a></p></body></html>`,
        { status: 500, headers: { "content-type": "text/html; charset=utf-8" } },
      );
    }
  },
};
