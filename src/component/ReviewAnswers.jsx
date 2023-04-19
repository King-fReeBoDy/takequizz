import React from "react";
import { data } from "./data";

function ReviewAnswers() {
  return (
    <section className="w-[90%] lg:w-[1000px] mx-auto">
      <div>
        <h1>Review answers</h1>

        <div>
          {data.map((option, index) => {
            return (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={index}
                  value={option}
                  name="id"
                  // disabled
                  onClick={() => handleAnswer(question, option, options)}
                />
                <label htmlFor={index} className="ml-2 text-lg">
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReviewAnswers;
