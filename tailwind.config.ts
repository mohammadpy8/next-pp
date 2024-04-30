import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          base: "#417F56",
          buttonColor: "#21402B",
        },
        secondary: {
          base: "#717171",
          modalHeader: "#EDEDED",
          borderChild: "#CBCBCB",
        },
      },
      boxShadow: {
        base: " 0px -4px 26px -11px rgba(122,122,122,1)",
      },
      width: {
        fullS: "500px",
      },
      borderRadius: {
        sliderRaduis: "50% 50% 45% 55% / 100% 100% 0% 0% ",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
