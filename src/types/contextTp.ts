type humanTp = { date: string; question: string };
type botTp = { date: string; answer: string };

type chatsTp = {
  id: number;
  human: humanTp;
  bot?: botTp;
};

export type { humanTp, botTp, chatsTp };
