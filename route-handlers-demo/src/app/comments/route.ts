import { type NextRequest } from "next/server";
import { comments } from "./data";
import { NextURL } from "next/dist/server/web/next-url";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

// GET - a way to read an object
// POST - a way to add or update object
// PATCH - a way to update one or more properties of object
// DELETE = a way to delete an object
