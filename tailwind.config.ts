import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: "#FCFCFC",
        logo: "#444EAA",
        active: "#F3F4FC",
        activeText: "#262626",
        inactiveText: "#808080",
        activeOutline: "#DADCEE",
        logout: "#A51818",
        blackColor: "#1A1A1A",
        grayColor: "#AAAAAA",
        lightGray: "#F2F2F2",
      },
      borderRadius: {
        'customBorders': '4px',
      },
      fontFamily: {
        'UncutSansLight': ['UncutSansLight', 'Inter', 'sans-serif'],
        'UncutSansRegular': ['UncutSansRegular', 'Inter', 'sans-serif'],
        'UncutSansMedium': ['UncutSansMedium', 'Inter', 'sans-serif'],
        'chivo-mono': ['"Chivo Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
