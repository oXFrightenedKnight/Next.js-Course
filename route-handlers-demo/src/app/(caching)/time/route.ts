export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}

// This caches the time and uses the cached result for the next 10 seconds instead of sending
// api request. After 10 seconds, any following request will update the time and start the
// timer again.

// Caching only works with GET methods

// Caching won't be applied if you are using headers(), cookies(), or working with request
// object in your GET method.
