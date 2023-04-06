// I hate ESLint config
/* eslint-disable */
// @ts-nocheck
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.config({
    root: true,
    env: {
      browser: true,
      esnext: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: true,
      tsconfigRotDir: __dirname,
    },
    plugins: ["@typescript-eslint", "solid"],
    extends: [
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:solid/typescript",
    ],
  }),
  {
    ignores: ["dist", "public/", "src-old/"],
  },
  prettier,
];
