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
            "--tw-prose-body": theme("colors.green[400]"),
            "--tw-prose-text": theme("colors.green[400]"),
            "--tw-prose-headings": theme("colors.green[600]"),
            "--tw-prose-links": theme("colors.green[600]"),
            "--tw-link-underline": "1px solid",
            "--tw-prose-bold": theme("colors.green[600]"),
            "--tw-prose-counters": theme("colors.green[400]"),
            "--tw-prose-bullets": theme("colors.green[400]"),
            "--tw-prose-hr": theme("colors.green[300]"),
            "--tw-prose-quotes": theme("colors.green[600]"),
            "--tw-prose-quote-borders": theme("colors.green[300]"),
            "--tw-prose-captions": theme("colors.green[600]"),
            "--tw-prose-code": theme("colors.green[600]"),
            "--tw-prose-pre-code": theme("colors.green[100]"),
            "--tw-prose-pre-bg": theme("colors.green[900]"),
            "--tw-prose-th-borders": theme("colors.green[900]"),
            "--tw-prose-td-borders": theme("colors.green[900]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
