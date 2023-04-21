import axios from "axios";
import React, { useState } from "react";

function EnterRoom() {
  const [roomCode, setRoomCode] = useState("");

  const handleOnchange = async (e) => {
    e.preventDefault();
    if (!roomCode) {
      console.log("provide all credentials");
      return;
    }

    try {
      const { data } = await axios(
        `https://quizroomapp.pythonanywhere.com/Classroom/get_classrooms_by_name/${roomCode}/`
      );
      setRoomCode("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(roomCode);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="w-[90%] md:w-[350px]" onSubmit={handleOnchange}>
        <h1 className="my-5 text-center font-semibold text-2xl">Quiz App</h1>

        <div className="grid">
          <label htmlFor="" className="text-sm">
            Enter classroom code
          </label>
          <input
            type="text"
            className=" py-1 px-3 border mb-3"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>

        <button className="bg-blue-700 text-gray-100 w-full py-2 mt-5">
          Enter class
        </button>
      </form>
    </div>
  );
}

export default EnterRoom;
