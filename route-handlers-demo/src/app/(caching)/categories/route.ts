// Caching is a way to store information so you don't have to a lot of requests to database
// per short periods of time. Instead, you store information returned from the database in
// a cache and update it by sending request to database after the end of its lifespan.

// Useful when the data rarely changes

export const dynamic = "force-static"; // ensures response is cached and served
//                                        instantly to all users

export async function GET() {
  const categories = [
    { id: 1, name: "Cards" },
    { id: 2, name: "Toys" },
    { id: 3, name: "Credits" },
    { id: 4, name: "Presents" },
  ];
  return Response.json(categories);
}
