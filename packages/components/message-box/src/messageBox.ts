import {
  Action,
  Callback,
  MessageBoxData,
  MessageBoxState,
} from "./messageBox.help";
import { ComponentPublicInstance, h, render } from "vue";
import VirMessageBox from "./VirMessageBox.vue";

const messageInstance = new Map<
  ComponentPublicInstance<{
    _visible: boolean;
    closed: () => void;
    state: MessageBoxState;
  }>,
  {
    options: any;
    cb: Callback;
    resolve: (res: any) => void;
    reject: (err?: any) => void;
  }
>();

const container = document.createElement("div");
document.body.appendChild(container);

const initInstance = (props: any, container: HTMLDivElement) => {
  const vNode = h(VirMessageBox, props);
  render(vNode, container);
  return vNode.component;
};

const showMessage = (options: any = {}) => {
  const instance = initInstance(options, container);
  const vm = instance?.exposeProxy as ComponentPublicInstance<{
    _visible: boolean;
    closed: () => void;
    state: MessageBoxState;
  }>;
  options.onAction = (action: Action) => {
    const currentMsg = messageInstance.get(vm);
    let reslove: Action | { value: string; action: Action };
    if (options.showInput) {
      reslove = { value: vm.state.inputValue as string, action };
    } else reslove = action;
    if (options.callback) {
      options.callback(reslove, instance!.proxy);
    } else {
      if (action === "cancel" || action === "close") {
        if (options.distinguishCancelAndClose && action !== "cancel")
          currentMsg?.reject("close");
        else currentMsg?.reject("cancel");
      } else currentMsg?.resolve(reslove);
    }
    render(null, container);
  };
  // @ts-ignore
  vm["onAction"] = options.onAction;

  for (const prop in options) {
    // @ts-ignore
    if (Object.hasOwn(options, prop) && !Object.hasOwn(vm.$props, prop)) {
      // @ts-ignore
      vm[prop as string] = options[prop];
    }
  }
  vm._visible = true;
  return vm;
};

async function MessageBox(
  options: Partial<MessageBoxState>
): Promise<MessageBoxData>;
function MessageBox(
  options: Partial<MessageBoxState> | string
): Promise<{ value: string; action: Action } | Action> {
  let cb: Callback;
  if (typeof options === "string") {
    options = {
      message: options,
    };
  } else {
    cb = options.callback!;
  }
  return new Promise((resolve, reject) => {
    const vm = showMessage(options);
    messageInstance.set(vm, {
      options,
      cb,
      resolve,
      reject,
    });
  });
}

function MessageBoxFn(
  message: string,
  title?: string | Partial<MessageBoxState>,
  options?: Partial<MessageBoxState>
) {
  let _option = {} as Partial<MessageBoxState>;
  _option.message = message;
  if (title) {
    if (typeof title === "string") _option.title = title;
    else _option = { ..._option, ...title };
  }
  if (options) _option = { ..._option, ...options };
  return MessageBox(_option);
}

export { MessageBoxFn };
