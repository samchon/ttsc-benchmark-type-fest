import type { ITtscLintConfig } from "@ttsc/lint";

// @ttsc/lint config for the ttsc benchmark (ttsc-lint branch). Mirrors the
// 12 shared lint rules and the legacy .prettierrc settings so the format
// benchmark cell measures the no-op steady state.
export default {
  files: ["index.d.ts", "source/**/*.d.ts", "test-d/**/*.ts"],
  ignores: ["lint-rules/**", "lint-processors/**"],
  format: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    trailingComma: "all",
    singleQuote: true,
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "prefer-template": "error",
    "no-useless-rename": "error",
    "dot-notation": "error",
    "no-extra-boolean-cast": "error",
    "no-useless-escape": "error",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
