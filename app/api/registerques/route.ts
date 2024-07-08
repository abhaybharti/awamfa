import { NextRequest, NextResponse } from "next/server";
import data from "./registerques.json";

export async function POST(request: NextRequest) {
  const tempData = { data };
  try {
    return NextResponse.json(tempData);
  } catch (error) {
    return NextResponse.json({ data: [], status: 500 });
  }
}

export default async function handler(req: NextRequest) {
  if (req.method === "PUT") {
    return NextResponse.json({ message: "This is put request" });
  } else if (req.method === "POST") {
    return NextResponse.json({ message: "This is POST request" });
  }
}
