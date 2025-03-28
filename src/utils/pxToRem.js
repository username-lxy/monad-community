// 工具函数：根据当前html的font-size将px转为rem
export const pxToRem = (px) => {
  // 获取html的font-size（lib-flexible设置的基准值）
  const htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `${px / htmlFontSize}rem`;
};

// 增强版：支持带单位和不带单位的输入
export const styleToRem = (styleObj) => {
  const result = {};
  for (const [key, value] of Object.entries(styleObj)) {
    if (typeof value === "string" && value.includes("px")) {
      result[key] = pxToRem(parseFloat(value));
    } else {
      result[key] = value; // 保留非px值（如deg、%等）
    }
  }
  return result;
};
