import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { requestId, tranRefNo, userPK, question, answer } = reqBody;
  console.log(requestId, tranRefNo, userPK, question, answer);

  try {
    if (answer === "abhay") {
      return NextResponse.json({
        message: "Success - Security Question Answer matched",
        StatusCode: 0,
      });
    } else {
      return NextResponse.json({
        message: "Invalid Security Question Answer",
        StatusCode: 1,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Invalid Security Question Answer",
      StatusCode: 1,
    });
  }
}
