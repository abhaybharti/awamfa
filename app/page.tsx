"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const baseUrl = "http://127.0.0.1:8000/";
const env = "DEV";

export const api = {
  MFAREQ: env === "PROD" ? `${baseUrl}mfareq` : "./mfareq.json",
  ANSVAL: env === "PROD" ? `${baseUrl}ansval` : "./ansval.json",
};

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState();

  const getMfaQuestion = async () => {
    setSelectedAnswer("");
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mfaType: "1",
          mode: "2",
          requestId: "3",
          tranType: "4",
          createdBy: "5",
        }),
      };
      const response = await fetch("/api/mfareq", requestOptions);
      const json = await response.json();

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
          requestId: activeQuestion.requestId,
          tranRefNo: activeQuestion.transRefNo,
          userPK: activeQuestion.userPK,
          question: activeQuestion.question,
          answer: selectedAnswer,
        }),
      };
      const response = await fetch("/api/ansval", requestOptions);
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
        <p className="p-2">Customer ID : {activeQuestion?.customerId}</p>
        <p className="p-2">Question : {activeQuestion?.question}</p>
        <p className="p-2">request ID : {activeQuestion?.requestId}</p>
        <p className="p-2">TransferNo : {activeQuestion?.transRefNo}</p>
        <p className="p-2">User PK : {activeQuestion?.userPK}</p>
        <input
          type="text m-2"
          name="question"
          width={30} value={selectedAnswer}
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
