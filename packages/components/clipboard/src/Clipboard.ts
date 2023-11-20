import { InitConfig } from "./Clipboard.help";
/**
 * 思路:
 * 1.实现监听复制的回调
 */
class VirClipboard {
  private navigator = window.navigator as any;
  private onCopyCallback: Function;
  private disableCopy: boolean;
  private clipboardInterceptor: Function;
  private defaultCopyCb: Function = () => {
    console.log("监听了复制操作");
  };
  private defaultInterceptor: Function = (text: string) => {
    return text;
  };
  constructor(initConfig: InitConfig) {
    this.onCopyCallback = initConfig.onCopyCallback
      ? initConfig.onCopyCallback
      : this.defaultCopyCb;
    this.clipboardInterceptor = initConfig.clipboardInterceptor
      ? initConfig.clipboardInterceptor
      : this.defaultInterceptor;
    this.disableCopy = initConfig.disableCopy;
    this.init();
  }
  init() {
    document.removeEventListener("copy", () => {}, false);
    document.addEventListener(
      "copy",
      (e) => {
        this.onCopyCallback(e);
        if (this.disableCopy) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        } else {
          this.clipboardTextHandler();
        }
      },
      false
    );
  }
  clipboardTextHandler() {
    //@ts-ignore
    let text = window.getSelection().toString();
    const newText = this.clipboardInterceptor(text) ?? text;
    this.setClipboardText(newText);
  }
  setClipboardText(text: string) {
    this.navigator.clipboard.writeText(text);
  }
  remove() {
    document.removeEventListener("copy", () => {}, false);
  }
}

export { VirClipboard };
export default VirClipboard;
export * from "./Clipboard.help";
