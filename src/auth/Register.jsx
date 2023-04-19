import React from "react";

function Register() {
  return (
    <div className="h-screen flex  flex-col justify-center items-center">
      <form className="w-[90%] md:w-[350px]">
        <h1 className="my-5 text-center font-semibold text-2xl">
          Register an account
        </h1>

        <div className="grid">
          <label htmlFor="" className="text-sm">
            Index Number
          </label>
          <input type="number" className=" py-1 px-3 border mb-3" />
        </div>

        <div className="grid">
          <label htmlFor="" className="text-sm">
            Password
          </label>
          <input type="password" className=" py-1 px-3 border mb-3" />
        </div>
        <div className="grid">
          <label htmlFor="" className="text-sm">
            Confrim Password
          </label>
          <input type="password" className=" py-1 px-3 border mb-3" />
        </div>

        <button className="bg-blue-700 text-gray-100 w-full py-2 mt-5">
          Create an account
        </button>
      </form>
      <p className="my-5">
        Already have an account?{" "}
        <span className="text-blue-700 cursor-pointer">Login</span>
      </p>
    </div>
  );
}

export default Register;
