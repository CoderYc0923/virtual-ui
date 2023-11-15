import { initConfig, task, taskWithCallbacks } from "./PromisePool.help";

class VirPromisePool<T> {
  //最大并发数
  private limit: number = 5;
  //当前正在运行的数量
  private runningCount: number;
  //等待队列
  private waitQueue: Array<taskWithCallbacks<T>>;
  //运行队列
  private runningQueue: Map<Number, taskWithCallbacks<T>>;
  //中断阀门
  private isStop: boolean = false;
  //是否打印运行相关信息
  private debug: boolean = false;
  //任务ID
  private taskId: number;
  //并发池结束的回调
  private finishCallBack: Function | undefined
  //并发请求结束的回调
  private taskFinish: Function | undefined
  //自定义任务属性
  private customTaskInfo: Object = {}

  constructor(initConfig: initConfig) {
    this.limit = initConfig.maxCount ? initConfig.maxCount : this.limit;
    this.debug = initConfig.debug ? true : false;
    this.customTaskInfo = initConfig.customTaskInfo ? initConfig.customTaskInfo : {}
    initConfig.onFinish && (this.finishCallBack = initConfig.onFinish)
    initConfig.onTaskFinish && (this.taskFinish = initConfig.onTaskFinish)
    this.runningCount = 0;
    this.taskId = 0;
    this.waitQueue = [];
    this.runningQueue = new Map();
  }

  //添加任务
  addTask(task: task<T>) {
    //返回一个新的promise实例，在任务完成前一直是pending
    return new Promise<T>((resolve, reject) => {
      const taskWithCallbacks = {
        task,
        taskId: this.taskId++,
        taskStatus: 'pending',
        customInfo: this.customTaskInfo,
        resolve,
        reject,
      } as taskWithCallbacks<T>;
      if (this.runningCount < this.limit) {
        this.debug && console.log('任务添加：当前并发数', this.runningCount, `并发数量未满，任务id${taskWithCallbacks.taskId} 直接运行`);
        this.runTask(taskWithCallbacks);
      } else {
        this.debug && console.log('任务添加：当前并发数', this.runningCount, `并发数量已满，任务id${taskWithCallbacks.taskId} 挂起等待`);
        this.waitQueue.push(taskWithCallbacks);
      }
    });
  }

  //中断任务，返回运行队列
  stopTask() {
    this.isStop = true;
    return Array.from(this.runningQueue.values())
  }

  private runTask(taskWithCallbacks: taskWithCallbacks<T>) {
    if (this.isStop) return
    this.runningQueue.set(taskWithCallbacks.taskId, taskWithCallbacks)
    this.runningCount++;
    taskWithCallbacks
      .task()
      .then((res) => {
        this.runningCount--;
        this.runningQueue.delete(taskWithCallbacks.taskId)
        taskWithCallbacks.resolve(res);
        taskWithCallbacks.taskStatus = 'fulfilled'
        this.taskFinish && this.taskFinish(taskWithCallbacks)
        this.debug && console.log(`任务id${taskWithCallbacks.taskId}完成，完成回调：[${res}]`, '当前并发数', this.runningCount);
        this.checkQueue();
      })
      .catch((err) => {
        this.runningCount--;
        this.runningQueue.delete(taskWithCallbacks.taskId)
        taskWithCallbacks.reject(err);
        taskWithCallbacks.taskStatus = 'rejected'
        this.taskFinish && this.taskFinish(taskWithCallbacks)
        this.debug && console.log(`任务id${taskWithCallbacks.taskId}失败完成，完成回调：[${err}]`, '当前并发数', this.runningCount);
        this.checkQueue();
      });
  }

  //检查等待队列
  private checkQueue() {
    if (this.isStop) return
    if (this.waitQueue.length === 0 && this.runningCount === 0) {
      this.finishCallBack && this.finishCallBack()
      return
    }
    if (this.waitQueue.length > 0 && this.runningCount < this.limit) {
      const nextTask = this.waitQueue.shift()!;
      this.debug && console.log('并发池出现空位，取出任务', nextTask);
      this.runTask(nextTask);
    }
  }
}

export { VirPromisePool };
export * from './PromisePool.help'