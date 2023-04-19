import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function QuizPage() {
  const [value, setValue] = useState(0);
  const [quiz, setQuiz] = useState([]);

  const getAllQuiz = useCallback(async () => {
    try {
      const { data } = await axios(
        "https://quizroomapp.pythonanywhere.com/Quiz/"
      );

      setQuiz(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllQuiz();
  }, [getAllQuiz]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="w-[90%] md:w-[600px]">
        <h1 className="mb-5 text-center font-semibold text-2xl">Quiz App</h1>

        <div className="text-center">
          <p className="text-xl">This Quiz Ends in: </p>
          <p className="text-2xl font-semibold my-3">00hrs 30 min 43 secs</p>
        </div>

        <section className="my-6 bg-gray-100 p-3 font-semibold">
          <div>
            {quiz.map(({ id, description, is_active, name, questions }) => {
              const { id: qId, text, options } = questions[value];
              return (
                <div>
                  <h1>{text}</h1>
                  <div>
                    {options.map((option) => {
                      return (
                        <div>
                          <input
                            id={option.id}
                            type="radio"
                            name={qId}
                            value={option.text}
                          />
                          <label htmlFor={option.id}>{option.text}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default QuizPage;
