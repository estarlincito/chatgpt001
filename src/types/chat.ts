import { Bot } from './bot';
import { Human } from './human';

export type Chat = {
  id: number;
  human?: Human;
  bot?: Bot;
};
