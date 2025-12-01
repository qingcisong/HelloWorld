// install daisyUI
import daisyui from "daisyui";

// 2. 导出 Tailwind 的配置对象
export default {
  // 告诉 Tailwind：去哪些文件里扫描 class 名
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],

  // 主题扩展（现在先留空，以后想自定义字体/颜色可以在这里改）
  theme: {
    extend: {},
  },

  // 3. 在 plugins 里启用 daisyUI 把D里面的各种小组件加进来
  plugins: [daisyui],
};
