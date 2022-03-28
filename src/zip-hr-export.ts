interface IEnv {
  API_URL: string;
  NYTIMES_API_KEY: string;
}

export const ENV: IEnv = {
  API_URL: 'https://api.nytimes.com/svc/topstories/v2',
  NYTIMES_API_KEY: 'QCTMKZfm0blEGdNjFnVkHvAFxINzH4wz',
};
