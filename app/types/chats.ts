export type Human = { date: string; question: string };
export type Bot = { date: string; answer: string | undefined };

export type Chats = {
  id: number;
  human?: Human;
  bot?: Bot;
};
