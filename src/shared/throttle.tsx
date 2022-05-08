const throttle = <T extends ((...args: any[]) => any)>(fn: T, time: number) => {
  let timer: number | undefined;
  let result: ReturnType<T>
  return (...args: Parameters<T>) => {
    if (timer) {
      return result;
    } else {
      result = fn(...args);
      timer = setTimeout(() => {
        timer = undefined;
      }, time);
      return result;
    }
  };
};


export default throttle;