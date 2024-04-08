module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|gray|yellow)-(700)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
