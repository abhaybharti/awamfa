"use client";
import { ApiList } from "@/utils/constant";
import React, { useEffect, useState, useRef } from "react";

const UserRegistration = () => {
  const [questionList, setQuestionList] = useState([]);
  const [firstQuesAns, setFirstQues] = useState("");
  const [secondQuesAns, setSecondQues] = useState("");
  const [thirdQuesAns, setThirdQues] = useState("");
  const [fourQuesAns, setFourQues] = useState("");
  const [fiveQuesAns, setFiveQues] = useState("");

  const firstQuesRef = useRef("");
  const secondQuesRef = useRef("");
  const thirdQuesRef = useRef("");
  const fourQuesRef = useRef("");
  const fiveQuesRef = useRef("");

  const getQuestionList = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(ApiList.queslist, requestOptions);
      const json = await response.json();
      setQuestionList(json?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFirstQues = (event) => {
    setFirstQues(event.target.value);
  };

  const handleSubmit = async () => {
    const firstQuestion = firstQuesRef.current.textContent;
    const secondQuestion = secondQuesRef.current.textContent;
    const thirdQuestion = thirdQuesRef.current.textContent;
    const fourQuestion = fourQuesRef.current.textContent;
    const fiveQuestion = fiveQuesRef.current.textContent;
    //console.log("firstQuestion", firstQuestion);
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quest1: firstQuestion,
          quest2: secondQuestion,
          quest3: thirdQuestion,
          quest4: fourQuestion,
          quest5: fiveQuestion,
          ans1: firstQuesAns,
          ans2: secondQuesAns,
          ans3: thirdQuesAns,
          ans4: fourQuesAns,
          ans5: fiveQuesAns,
          id: "87",
          createdBy: "test",
        }),
      };
      const response = await fetch(ApiList.registerques, requestOptions);
      const json = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  function getRandomIndexNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  return (
    // className="flex gap-5 flex-col w-160  m-auto h-screen justify-center text-center"
    <div className="flex justify-center">
      {questionList && questionList.length > 0 ? (
        <div
          className="flex flex-col m-3 max-w-96 gap-3"
          key={questionList[0].question_no}
        >
          <>
            <label
              key={questionList[getRandomIndexNumber(questionList)].question_no}
              ref={firstQuesRef}
            >
              {questionList[getRandomIndexNumber(questionList)].question}
            </label>
            <input
              className="bg-blue-200 ml-5"
              width={100}
              placeholder="Enter your Answer"
              onChange={() => setFirstQues(event.target.value)}
            ></input>
          </>
          <>
            <label
              key={questionList[getRandomIndexNumber(questionList)].question_no}
              ref={secondQuesRef}
            >
              {questionList[1].question}
            </label>
            <input
              className="bg-blue-200 ml-5"
              width={100}
              placeholder="Enter your Answer"
              onChange={() => setSecondQues(event.target.value)}
            ></input>
          </>
          <>
            <label
              key={questionList[getRandomIndexNumber(questionList)].question_no}
              ref={thirdQuesRef}
            >
              {questionList[2].question}
            </label>
            <input
              className="bg-blue-200 ml-5"
              width={100}
              placeholder="Enter your Answer"
              onChange={() => setThirdQues(event.target.value)}
            ></input>
          </>
          <>
            <label
              key={questionList[getRandomIndexNumber(questionList)].question_no}
              ref={fourQuesRef}
            >
              {questionList[3].question}
            </label>
            <input
              className="bg-blue-200 ml-5"
              width={100}
              placeholder="Enter your Answer"
              onChange={() => setFourQues(event.target.value)}
            ></input>
          </>
          <>
            <label
              key={questionList[getRandomIndexNumber(questionList)].question_no}
              ref={fiveQuesRef}
            >
              {questionList[4].question}
            </label>
            <input
              className="bg-blue-200 ml-5"
              width={100}
              placeholder="Enter your Answer"
              onChange={() => setFiveQues(event.target.value)}
            ></input>
          </>
          <section className="flex justify-center">
            <input
              type="button"
              onClick={handleSubmit}
              value="Submit"
              className="bg-slate-800 font-bold text-white rounded-lg"
            />
          </section>
        </div>
      ) : (
        <p> No Question Available</p>
      )}
    </div>
  );
};

export default UserRegistration;
