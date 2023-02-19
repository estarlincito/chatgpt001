const serverResults = async (input: string) => {
  const res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: JSON.stringify(input),
      temperature: 0.9,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    }),
  });

  return await res.json();
};

export { serverResults };
