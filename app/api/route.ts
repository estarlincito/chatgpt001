import { NextResponse } from "next/server";
import { botAnswer } from "@/app/utils";

export async function POST(request: Request) {
  const req = await request.json();
  const res = await botAnswer(req.input);
  return NextResponse.json(res);
}
