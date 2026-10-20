import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Claude Code's scratch worktrees: full checkouts, each with its own
    // node_modules and .next build output. Linting them doubles every real
    // finding and buries it under thousands from generated code.
    ".claude/**",
  ]),
]);

export default eslintConfig;
