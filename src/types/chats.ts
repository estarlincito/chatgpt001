import { Bot } from "./bot";
import { Human } from "./human";

export type Chats = {
  id: number;
  human?: Human;
  bot?: Bot;
};
