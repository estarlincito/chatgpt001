"use client";
import { AppContext } from "@/context";
import { useContext } from "react";

export const useToggle = () => {
  try {
    const { alert, setAlert, collapse, setCollapse } = useContext(AppContext);

    const toggleAlert = () => {
      setAlert(!alert);
    };

    const toggleCollapse = () => {
      setCollapse(!collapse);
    };

    return { alert, toggleAlert, collapse, toggleCollapse };
  } catch (error) {
    throw new Error("useChat must be used within a ChatContext");
  }
};
