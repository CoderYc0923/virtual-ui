import { FinalWaterMakeConfig } from "../watermark.types";

/**
 * @description 监听水印的dom元素
 * @param watermark 水印dom元素
 * @param config 水印配置
 * @returns 监视器observe，配有remove方法，可以删除水印
 */

export const observeWatermark = (
  watermark: HTMLDivElement,
  config: FinalWaterMakeConfig
) => {
  const { onchange, success } = config;
  const observe = new Guard(watermark, onchange);
  success();
  return observe;
};

export class Guard {
  watermarkParent: HTMLElement;
  watermarkClone: HTMLElement;
  observer!: MutationObserver;

  constructor(public watermark: HTMLElement, public onchange: Function) {
    this.watermarkParent = this.watermark.parentElement as HTMLElement;
    this.watermarkClone = watermark.cloneNode(true) as HTMLElement;
  }

  start() {
    const config = {
      characterData: true,
      attributes: true,
      childList: true,
      subtree: true,
    };
    this.observer = new MutationObserver(this._callback);
    if (!this.observer) throw new Error("Not exist: new MutationObserver()");
    this.observer.observe(this.watermarkParent, config);
  }

  stop() {
    this.observer.disconnect();
    this.watermark.remove();
  }

  _callback = (mutationList: MutationRecord[]) => {
    let needReStart = false;
    for (const mutatuon of mutationList) {
      if (mutatuon.type === "childList") {
        for (let i = 0; i < mutatuon.removedNodes.length; i++) {
          if (mutatuon.removedNodes[i] === this.watermark) {
            needReStart = true;
            break;
          }
        }
      } else if (mutatuon.target === this.watermark) {
        needReStart = true;
      }
      if (needReStart) {
        this.onchange(mutatuon);
        this._readdWatermark();
        break;
      }
    }
  };

  _readdWatermark() {
    const newWatermark = this.watermarkClone.cloneNode(true) as HTMLElement
    this.watermarkParent.appendChild(newWatermark)
    this.watermark = newWatermark
    this.observer.disconnect()
    this.start()
  }
}
