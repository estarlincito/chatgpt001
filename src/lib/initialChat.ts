import currentTimer from './current-timer';

const initialChat = [
  {
    id: 0,
    bot: {
      date: currentTimer(),
      answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
    },
  },
];

export default initialChat;
