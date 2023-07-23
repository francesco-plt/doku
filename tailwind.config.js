/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.emerald[400]"),
            "--tw-prose-text": theme("colors.emerald[400]"),
            "--tw-prose-headings": theme("colors.emerald[600]"),
            "--tw-prose-links": theme("colors.emerald[600]"),
            "--tw-link-underline": "1px solid",
            "--tw-prose-bold": theme("colors.emerald[600]"),
            "--tw-prose-counters": theme("colors.emerald[400]"),
            "--tw-prose-bullets": theme("colors.emerald[400]"),
            "--tw-prose-hr": theme("colors.emerald[300]"),
            "--tw-prose-quotes": theme("colors.emerald[600]"),
            "--tw-prose-quote-borders": theme("colors.emerald[300]"),
            "--tw-prose-captions": theme("colors.emerald[600]"),
            "--tw-prose-code": theme("colors.emerald[600]"),
            "--tw-prose-pre-code": theme("colors.emerald[100]"),
            "--tw-prose-pre-bg": theme("colors.emerald[900]"),
            "--tw-prose-th-borders": theme("colors.emerald[900]"),
            "--tw-prose-td-borders": theme("colors.emerald[900]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
