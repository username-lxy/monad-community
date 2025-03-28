module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 192, // 设计稿 1440px → 1rem = 144px
      propList: ["*"], // 转换所有属性
      selectorBlackList: [], // 不转换的选择器
      minPixelValue: 2, // 最小转换像素
    },
  },
};
