const colors = require("tailwindcss/colors");
module.exports = {
  // 生产环境移除未用样式
  // purge: [
  //   './index.html',
  //   './src/**/*.{vue,js,ts,jsx,tsx}',
  //   './packages/**/*.{vue,js,ts,jsx,tsx}'
  // ],
  // mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./packages/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#409EFF",
      success: "#67C23A",
      warning: "#E6A23C",
      danger: "#F56C6C",
      info: "#909399",
      transparent: "transparent",
    },
    extend: {
      spacing: {
        1200: "1360px",
      },
      minWidth: {
        1200: "1360px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["active"],
      backgroundColor: ["active"],
      textColor: ["active"],
      rounded: ["last", "first"],
    },
  },
  plugins: [],
};
