/**
 * Website AI controller endpoint — served at /api/worker
 *
 * Vercel's Node runtime treats a bare `export default function` as the Node
 * handler and invokes it as (request, response). A `Response` returned from
 * that shape is discarded, and because nothing ever writes to `response` the
 * request hangs until the gateway times out. Exporting a default object with
 * a `fetch` method selects the Web handler instead, which is what this code
 * was already written against.
 */

// Permissive because this is a public, read-only status endpoint. Narrow this
// to the calling site's origin once the controller does real work.
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    return Response.json(
      {
        success: true,
        message: "Your Vercel AI controller is working!",
      },
      { headers: CORS_HEADERS },
    );
  },
};
