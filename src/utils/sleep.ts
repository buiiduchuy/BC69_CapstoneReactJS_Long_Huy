export const sleep = (times = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, times));
};
