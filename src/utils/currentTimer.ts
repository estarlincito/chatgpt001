const currentTimer = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour <= 9 ? "0" : ""}${hour}:${minute <= 9 ? "0" : ""}${minute}`;
};

export { currentTimer };
