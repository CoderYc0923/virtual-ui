import { CSSProperties } from "vue";

export const DEFAULT_NAMESPACE = 'vir'
export const STATE_PREFIX = 'is'

type namespaceStyle = 'backgroundColor' | 'color' | 'width' | 'height'

export const useNameSpace = (namespace: string) => {
    return {
        base() {
            return `${DEFAULT_NAMESPACE}-${namespace}`
        },
        is(state: boolean, name: string, needNs?: boolean) {
            return name && state ? `${needNs ? DEFAULT_NAMESPACE + '-' : ''}${STATE_PREFIX}-${name}` : ''
        },
        is_ns(state: boolean, name: string, needNs?: boolean) {
            return name && state ? `${needNs ? DEFAULT_NAMESPACE + '-' : ''}${namespace}-${name}` : ''
        },
        sfix(suffix: string) {
            return suffix ? `${DEFAULT_NAMESPACE}-${namespace}-${suffix}` : ''
        },
        sy(data: string, label: namespaceStyle) {
            return {
                [label]: data
            } as CSSProperties
        },
        is_sy(is: boolean, one: CSSProperties, two?: CSSProperties) {
            if (!two) return is ? one : {} as CSSProperties
            return is ? one : two
        }
    }
}