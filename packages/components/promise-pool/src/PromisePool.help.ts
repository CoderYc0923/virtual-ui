export type resolve<T> = (value?: T | PromiseLike<T>) => void;
export type reject = (reason?: any) => void;
export type task<T> = () => Promise<T>;
export type taskWithCallbacks<T> = {
  task: task<T>;
  taskId: number;
  taskStatus: string;
  resolve: resolve<T>;
  reject: reject;
};
export type initConfig = {
  maxCount?: number
  debug?: boolean
  onFinish?: Function
  onTaskFinish?:Function
  customTaskInfo?:Object
}