"use client";

import { useState } from "react";

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState();

  // const mfareq = "https://d08e-103-208-68-78.ngrok-free.app/mfareq/";
  // const ansval = "https://d08e-103-208-68-78.ngrok-free.app/ansval/";
  // const queslist = "https://d08e-103-208-68-78.ngrok-free.app/queslist/";
  const mfareq = "/api/mfareq";
  const ansval = "/api/ansval";
  

  const getMfaQuestion = async () => {
    setSelectedAnswer("");
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mfaType: "QUE",
          channel: "IB",
          mode: "EMAIL",
          requestId: "xlq87iKbVjRb",
          customerId: "User003",
          account: "6513556670",
          custMobile: "8731645879",
          custEmail: "Awanish.Kumar53@gmail.com",
          tranType: "login_from_newdevice",
          tranRefNo: "bMk6PlrcVqPZk",
          tranAmt: 17502,
          tranCurrency: "INR",
          deviceID: "M6UWS5RFpianMyJqop",
          payeeName: "NextJS",
          smsTemplate: "1",
          createdBy: "guest",
        }),
      };
      const response = await fetch(mfareq, requestOptions);
      const json = await response.json();

      // setActiveQuestion(json?.data);
      setActiveQuestion(json?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const submitAnswer = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: activeQuestion?.requestId,
          tranRefNo: activeQuestion?.tranRefNo,
          userPK: activeQuestion?.userPK,
          question: activeQuestion?.question,
          answer: selectedAnswer,
        }),
      };
      const response = await fetch(ansval, requestOptions);
      const json = await response.json();
      setResult(json.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-blue-100 align-middle mt-5 m-auto">
      <h1 className="font-bold underline">MFA App Integration Test</h1>
      <div className="flex gap-5 flex-col border-2 w-160 border-black m-auto">
        <p className="p-2">
          Customer ID :{" "}
          {activeQuestion.customerId !== undefined
            ? activeQuestion.customerId
            : ""}
        </p>
        <p className="p-2">Question : {activeQuestion?.question}</p>
        <p className="p-2">request ID : {activeQuestion?.requestId}</p>
        <p className="p-2">TransferNo : {activeQuestion?.tranRefNo}</p>
        <p className="p-2">User PK : {activeQuestion?.userPK}</p>
        <input
          type="text m-2"
          name="question"
          width={30}
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
        />
        <br></br>

        <div className="flex flex-row gap-5 justify-center mb-5">
          <button
            className="font-black border-2 p-1  bg-pink-400 "
            onClick={getMfaQuestion}
          >
            Get Question
          </button>
          <button
            className="font-black border-2 p-1 bg-pink-400"
            onClick={submitAnswer}
          >
            Submit Answer
          </button>
        </div>
        <p>Result : {result}</p>
      </div>
    </div>
  );
}
