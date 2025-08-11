import { request } from "http";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const i = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[i].text = text;
  return Response.json(comments[i]);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const i = comments.findIndex((comment) => comment.id === parseInt(id));
  const deleted_comment = comments[i];
  comments.splice(i, 1);
  return Response.json(deleted_comment);
}
