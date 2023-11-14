import { resolve, reject, task, taskWithCallbacks } from "./PromisePool.help";

class PromisePool<T> {
  //最大并发数
  private limit: number;
  //当前正在运行的数量
  private runningCount: number;
  //等待队列
  private waitQueue: Array<taskWithCallbacks<T>>;

  private isStop: boolean = false;

  constructor(maxCount: number) {
    this.limit = maxCount;
    this.runningCount = 0;
    this.waitQueue = [];
  }

  //添加任务
  addTask(task: task<T>) {
    //返回一个新的promise实例，在任务完成前一直是pending
    return new Promise<T>((resolve, reject) => {
      const taskWithCallbacks = {
        task,
        resolve,
        reject,
      } as taskWithCallbacks<T>;
      if (this.runningCount < this.limit) {
        this.runTask(taskWithCallbacks);
      } else {
        this.waitQueue.push(taskWithCallbacks);
      }
    });
  }

  stopTask() {
    this.isStop = true;
  }

  private runTask(taskWithCallbacks: taskWithCallbacks<T>) {
    this.runningCount++;
    taskWithCallbacks
      .task()
      .then((res) => {
        this.runningCount--;
        taskWithCallbacks.resolve(res);
        this.checkQueue();
      })
      .catch((err) => {
        this.runningCount--;
        taskWithCallbacks.reject(err);
        this.checkQueue();
      });
  }

  private checkQueue() {
    if (this.waitQueue.length > 0 && this.runningCount < this.limit) {
      const nextTask = this.waitQueue.shift()!;
      this.runTask(nextTask);
    }
  }
}

export { PromisePool };
