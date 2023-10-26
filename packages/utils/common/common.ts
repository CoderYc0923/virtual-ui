// 节流
export const throttle = (fn: Function, rateTime: number) => {
  let prev = Date.now() - rateTime;
  return (...args: any[]) => {
    if (Date.now() - prev >= rateTime) {
      fn.apply(this, args);
      prev = Date.now();
    }
  };
};
