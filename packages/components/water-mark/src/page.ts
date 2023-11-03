import { FinalWaterMakeConfig } from './watermark.types'
import { Guard } from './utils'
import { image2page, text2page } from './core'

const PageWaterMark = (config: FinalWaterMakeConfig, wmType: 'image' | 'text') => {
    let observe: Guard = wmType === 'image' ? image2page(config) : text2page(config)
    observe?.start()
    return {
        remove: () => {
            observe?.stop()
        }
    }
}

export default PageWaterMark;