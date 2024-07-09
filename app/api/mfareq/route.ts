import { NextRequest, NextResponse } from "next/server";
import data from "./mfareq.json";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { mfaType, mode, requestId, tranType, createdBy } = reqBody;
  console.log(mfaType, mode, requestId, tranType, createdBy);

  try {
    if (mfaType === "OTP") {
      return NextResponse.json({
        message:
          "Dear user 44040627, for the purpose of login_from_newdevice, your OTP is 199451. Never share with anyone.",
      });
    } else if (mfaType === "QUE") {
      return NextResponse.json(data);
    } else if (mfaType === "CAP") {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: "Invalid mfaType" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, status: 500 });
  }
}
