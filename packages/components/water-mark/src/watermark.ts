import { PageConfig, ImageConfig, ErrorType } from "./watermark.types";
import PageWaterMark from "./page";
import ImageWaterMark from "./image";
import { ErrorMsg, url2img, decodeImage } from "./watermark.utils";

class VirWaterMark {
  constructor() {
    return VirWaterMark;
  }

  static errorHandle(error: any, config: ImageConfig.User | PageConfig.User) {
    if ((error as ErrorType).code) {
      config.onerror && config.onerror(error as ErrorType);
    } else {
      config.onerror &&
        config.onerror(ErrorMsg.UnknownError(JSON.stringify(error)));
    }
  }

  //向图片添加水印
  static async image(config: ImageConfig.User) {
    try {
      if (!config.target && !config.image) {
        throw ErrorMsg.ParamsError(
          "the 'target' and 'image' parameters cannot be undefined at the same time."
        );
      }

      //若target为图片路径，将target转化为一个图片元素
      if (typeof config.target === "string") {
        config.target = await url2img(config.target);
      }

      if (config.image) {
        //图片水印
        const userConfig: ImageConfig.Image = {
          target: config.target,
          image: config.image,
          imageWidth: Number(config.imageWidth),
          imageHeight: Number(config.imageHeight),
          secret: config.secret || false,
          position: config.position || "repeat",
          rowGap: Number(config.rowGap) || 0,
          colGap: Number(config.colGap) || 0,
          success: config.success,
          onerror: config.onerror,
        };
        return new ImageWaterMark(userConfig, "image");
      } else {
        //文字水印
        const userConfig: ImageConfig.Text = {
          target: config.target,
          text: config.text || "VirWaterMark",
          secret: config.secret || false,
          position: config.position || "repeat",
          color: config.color || "rgba(0, 0, 0, 1)",
          fontSize: Number(config.fontSize) || 24,
          rowGap: Number(config.rowGap) || 0,
          colGap: Number(config.colGap) || 0,
          angle: Number(config.angle) || -25,
          success: config.success,
          onerror: config.onerror,
        };
        return new ImageWaterMark(userConfig, "text");
      }
    } catch (error) {
      this.errorHandle(error, config);
    }
  }

  //向页面元素添加水印
  static page(config: PageConfig.User = {}) {
    try {
      if (config.image) {
        //处理图片水印
        const userConfig: PageConfig.Image = {
          target: config.target || config.containerEl || document.body,
          image: config.image,
          zIndex: config.zIndex?.toString() || "1000",
          rowGap: Number(config.rowGap) || 0,
          colGap: Number(config.colGap) || 0,
          onchange: config.onchange,
          onerror: config.onerror,
          success: config.success,
        };
        return new PageWaterMark(userConfig, "image");
      } else {
        //处理文字水印
        const userConfig: PageConfig.Text = {
          target: config.target || config.containerEl || document.body,
          text: config.text || "Demo Text",
          color: config.color || "rgba(0, 0, 0, 0.15)",
          fontSize: Number(config.fontSize) || 24,
          zIndex: config.zIndex?.toLocaleString() || "10000",
          rowGap: Number(config.rowGap) || 0,
          colGap: Number(config.colGap) || 0,
          angle: Number(config.angle) || -25,
          onchange: config.onchange,
          onerror: config.onerror,
          success: config.success,
        };
        return new PageWaterMark(userConfig, "text");
      }
    } catch (error) {
      this.errorHandle(error, config);
    }
  }

  static utils = {
    encodeImage: async (config: ImageConfig.User) => {
      let base64;
      config.success = (data) => (base64 = data);
      await VirWaterMark.image(config);
      return base64;
    },
    decodeImage,
  };
}

export { VirWaterMark };
