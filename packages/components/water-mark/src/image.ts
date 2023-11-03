import { FinalWaterMakeConfig } from "./watermark.types";
import { text2image, image2image } from "./core";

const ImageWatermark: (
  config: FinalWaterMakeConfig,
  wmType: "image" | "text"
) => Promise<{ remove: Function }> = async (config, wmType) => {
    const target = config
    wmType === 'image' ? (await image2image(config)) : text2image(config)

    return {
        remove: () => {}
    }
};

export default ImageWatermark
