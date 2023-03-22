import { NextResponse } from "next/server";
import { botAnswer } from "@/utils";

export async function POST(request: Request) {
  const req = await request.json();
  const res = await botAnswer(req.question);
  return NextResponse.json(res);
}
