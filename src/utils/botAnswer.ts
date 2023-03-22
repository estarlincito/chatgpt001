import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_KEY,
});

const openai = new OpenAIApi(configuration);

export const botAnswer = async (input: string) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    temperature: 0.7,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [" Human:", " AI:"],
  });

  const { data } = response;

  return { answer: data.choices[0].text };
};
