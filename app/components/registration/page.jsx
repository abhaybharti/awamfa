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
    <div className="flex gap-5 flex-col border-2 w-160 border-black m-auto h-screen justify-center text-center">
      Registration page
    </div>
  );
}
