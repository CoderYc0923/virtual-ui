export interface MessageBoxTextType {
    titleText?: string
    messageText?: string
    confirmText?: string
    cancelText?: string
  }
  
  export const TextContextDefault = {
    titleText: 'Title',
    messageText: 'Message',
    confirmText: 'OK',
    cancelText: 'Cancel'
  }
  
  export type Action = 'confirm' | 'cancel' | 'close'
  export type BoxType = 'confirm' | 'alert'
  
  export interface MessageBoxState {
    title: string
    message: string
    confirmText: string
    cancelText: string
    type: 'success' | 'info' | 'warning' | 'danger'
    boxType: 'alert' | 'confirm'
    distinguishCancelAndClose: boolean
    showClose: boolean
    showCancelButton: boolean
    center: boolean
    action: Action
    callback: Callback
    showInput: boolean
    inputValue: String
  }
  
  export type Callback = ((value: string, action: Action) => any) | ((action: Action) => any)
  
  export type MessageBoxData = MessageBoxInputData & Action
  export interface MessageBoxInputData {
    value: string
    action: Action
  }
  