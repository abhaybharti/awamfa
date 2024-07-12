import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex h-16 align-middle bg-[#232F3F] justify-center text-white">
      <ul className="flex flex-row space-x-3 pr-2 pl-2 mt-4 justify-center align-middle">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/components/RequestForQuestions">
            Request For Security Questions
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/components/UserRegistration">User Registration</Link>
        </li>
        <li>
          {" "}
          <Link href="/components/RequestForOTP">Request For OTP</Link>
        </li>
        <li>
          {" "}
          <Link href="/components/RequestForCaptcha">Request For Captcha</Link>
        </li>
        <li>
          {" "}
          <Link href="/components/LinearChart">Linear Chart</Link>
        </li>
        <li>
          {" "}
          <Link href="/components/BarChart">Bar Chart</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
