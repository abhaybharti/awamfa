import { NextRequest, NextResponse } from "next/server";
import data from "./questlist.json";

export async function GET(request: NextRequest) {
  const tempData = { data };
  try {
    return NextResponse.json(tempData);
  } catch (error) {
    return NextResponse.json({ data: [], status: 500 });
  }
}
