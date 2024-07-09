import { NextRequest, NextResponse } from "next/server";

//Modify existing user question and answers
export async function PUT(req: NextRequest) {
  return NextResponse.json({ message: "This is put request" });
}

//Create a new user with questions/answers
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "This is POST REquest" });
}
