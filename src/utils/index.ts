export const sleep = async (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (cb: (...args: any[]) => void, delay = 500) => {
  let timerId: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
/**
const d = debounce((hi: string) => {
  console.log(hi);
}, 300);

d('str');
d('gjdfbdsjd');
d('hsjdbjusbducdsbdcudsb');
*/
