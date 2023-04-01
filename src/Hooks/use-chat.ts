"use client";
import { ChatContext } from "@/context";
import { useContext } from "react";

export const useChat = () => {
  try {
    const context = useContext(ChatContext);
    return context;
  } catch (error) {
    throw new Error("useChat must be used within a ChatContext");
  }
};
