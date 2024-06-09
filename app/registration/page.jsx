"use client";

import { useState, useEffect } from "react";

export default function Registration() {
  const [queryList, setQueryList] = useState();

  const queslist = "/api/queslist";

  const questionList = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(queslist, requestOptions);
      const json = await response.json();
      setQueryList((queryList) => ({ ...queryList, ...json.data }));
      console.log(queryList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    questionList();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center pt-5 bg-blue-300 h-screen text-2xl underline-offset-1">
        Registration page
      </h1>
      {/* {listItems} */}
    </>
  );
}
