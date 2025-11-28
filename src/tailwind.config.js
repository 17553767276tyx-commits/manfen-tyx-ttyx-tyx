/** @type {import('tailwindcss').Config} */
export default {
  // 告诉 Tailwind 哪些文件需要扫描来找到 CSS 类名
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // 启用深色模式支持
  darkMode: 'class',
};
