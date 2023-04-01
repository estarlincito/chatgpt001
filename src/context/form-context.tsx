"use client";
import { createContext, ReactNode, useState } from "react";

//Create Context
interface Context {
  question: string;
  setQuestion: (question: string) => void;
}

export const FormContext = createContext({} as Context);

//Set Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [question, setQuestion] = useState("");
  return (
    <FormContext.Provider value={{ question, setQuestion }}>
      {children}
    </FormContext.Provider>
  );
};
