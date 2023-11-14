export type resolve<T> = (value?: T | PromiseLike<T>) => void;
export type reject = (reason?: any) => void;
export type task<T> = () => Promise<T>;
export type taskWithCallbacks<T> = {
  task: task<T>;
  resolve: resolve<T>;
  reject: reject;
};
