import React, { useCallback, useState } from "react";

const Login = () => {
  const [info, setInfo] = useState({
    index: "",
    fullname: "",
  });

  const handleOnchange = useCallback(
    (e) => {
      setInfo((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    },
    [info]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.index || !info.fullname) {
      console.log("provide all credentials");
      return;
    }
    console.log(info);
    setInfo({
      index: "",
      fullname: "",
    });
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="w-[90%] md:w-[350px]" onSubmit={handleSubmit}>
        <h1 className="my-5 text-center font-semibold text-2xl">
          Sign in to your account
        </h1>

        <div className="grid">
          <label htmlFor="index" className="text-sm">
            Index Number
          </label>
          <input
            id="index"
            type="number"
            className=" py-1 px-3 border mb-3"
            name="index"
            value={info.index}
            onChange={handleOnchange}
          />
        </div>

        <div className="grid">
          <label htmlFor="fullname" className="text-sm">
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className=" py-1 px-3 border mb-3"
            name="fullname"
            value={info.fullname}
            onChange={handleOnchange}
          />
        </div>

        <button className="bg-blue-700 text-gray-100 w-full py-2 mt-5">
          Get started
        </button>
      </form>
    </div>
  );
};

export default Login;
