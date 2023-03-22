import { currentTimer } from "./currentTimer";

export const initialValue = [
  {
    id: 0,
    bot: {
      date: currentTimer(),
      answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
    },
  },
];
