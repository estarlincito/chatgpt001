const isEnv = (env: string) => {
  try {
    if (env.length > 0) {
      return env;
    }
  } catch (error) {
    throw new Error('Env not fount');
  }
};

export default isEnv;
