"use client";
import { AppContext } from "@/context";
import { useContext } from "react";

export const useToggle = () => {
  try {
    const { alert, setAlert, collapse, setCollapse } = useContext(AppContext);

    const toggleAlrt = () => {
      setAlert(!alert);
    };

    const toggleCollapse = () => {
      setCollapse(!collapse);
    };

    return { alert, toggleAlrt, collapse, toggleCollapse };
  } catch (error) {
    throw new Error("useChat must be used within a ChatContext");
  }
};
