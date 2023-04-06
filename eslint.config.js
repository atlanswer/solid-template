import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import turbo from "eslint-config-turbo/flat";
import solid from "eslint-plugin-solid/configs/typescript";
import globals from "globals";
import ts from "typescript-eslint";
import * as tsParser from "@typescript-eslint/parser";

export default ts.config(
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
        globals: {
          ...globals.browser,
        },
      },
    },
  },
  {
    ignores: ["dist", "public/"],
  },
  ...turbo,
  prettier,
);
