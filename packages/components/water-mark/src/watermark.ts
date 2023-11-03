import { WaterMakeConfig } from './watermark.types'
import PageWaterMark from './page'
import ImageWatermark from './image'
import { initConfig, decodeImage } from './utils'

class VirWaterMark {
    static init:(config: WaterMakeConfig) => Promise<void | { remove: Function }> = async (config) => {
        try {
            const configs = await initConfig(config)
            const target = configs.target;
            const markType = configs.image ? 'image' : 'text';
            if (target.nodeName === 'IMG') {
                await ImageWatermark(configs, markType)
            }
            return PageWaterMark(configs, markType)
        } catch (err) {
            config.onerror && config.onerror(`${err}`)
        }
    }

    static utils = {
        decodeImage
    }
}

export { VirWaterMark }