import React, { useState } from "react";
import { Link } from "react-router-dom";

function ClassStarts() {
  const [isReady, setIsReady] = useState(true);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="w-[90%] md:w-[350px]">
        <h1 className="my-5 text-center font-semibold text-2xl">Hello Ben</h1>

        <div className="text-center">
          <p className="text-xl">You’re are about to start this quiz in:</p>
          <p className="text-2xl font-semibold text-center">0:0:6</p>
        </div>

        {isReady ? (
          <Link to="/quizpage">
            <button className="bg-blue-700 text-gray-100 w-full py-2 mt-5">
              Start
            </button>
          </Link>
        ) : (
          <button className="bg-blue-700 text-gray-100 w-full py-2 mt-5">
            Get Ready
          </button>
        )}
      </section>
    </div>
  );
}

export default ClassStarts;
