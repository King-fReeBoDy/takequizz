import { createContext, useState } from "react";

export const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export default AuthProvider;
