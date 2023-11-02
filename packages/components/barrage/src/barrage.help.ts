export type Barrage<T = any> = string | T & CustomBarrage

export type Props = {
    //弹幕列表
    barrage: Barrage[],
    //轨道数量，0撑满容器
    channels?:number,
    //自动播放
    autoplay?:boolean,
    //循环播放
    loop?:boolean,
    //使用插槽
    useSlot?:boolean,
    //开启悬浮插槽
    useSuspendSlot?:boolean,
    //弹幕刷新率(ms) 默认100
    debounce?:number,
    //弹幕速度(像素/秒) 默认100
    speeds?:number,
    //随机轨道注入弹幕 
    randomChannel?: boolean,
    //弹幕字号（文本弹幕模式下）
    fontSize?:number,
    //弹幕垂直间距
    top?:number,
    //弹幕水平间距
    right?:number,
    //是否开启悬浮暂停
    isSuspend?:boolean,
    //弹幕额外样式
    extraStyle?: string,
    //弹幕透明度
    opacity?: number
}

export type CustomBarrage = {
    [key: string]: any
}

export type BarrageChannel = {
    [index: number]: [HTMLDivElement]
}