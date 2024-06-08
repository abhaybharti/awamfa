import { NextRequest, NextResponse } from "next/server";
import data from "./mfareq.json";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { mfaType, mode, requestId, tranType, createdBy } = reqBody;
  console.log(mfaType, mode, requestId, tranType, createdBy);

  try {
    const tempData = { data };

    return NextResponse.json(tempData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, status: 500 });
  }
}
