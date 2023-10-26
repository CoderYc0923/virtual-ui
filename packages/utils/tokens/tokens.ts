import { ComputedRef, InjectionKey } from 'vue'

export const rowGutter: InjectionKey<ComputedRef<number>> = Symbol();