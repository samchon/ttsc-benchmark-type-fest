// Flat ESLint config for the ttsc benchmark (legacy branch): the 12 shared lint
// rules, matching the ttsc-lint branch's lint.config.ts `rules` block.
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
	{
		// Benchmark scope is the library + its type tests; lint config files and
		// upstream lint-rules tooling are not part of the measured surface.
		ignores: ['lint-rules/**', 'lint-processors/**', 'xo.config.js', 'eslint.config.mjs'],
	},
	{
		files: ['index.d.ts', 'source/**/*.ts', 'test-d/**/*.ts'],
		// type-fest source carries inline `eslint-disable` directives for the
		// upstream xo ruleset (unicorn/*, @stylistic/*, type-fest/*); those rules
		// are not loaded here, so ignore inline config to avoid "rule not found".
		linterOptions: {noInlineConfig: true, reportUnusedDisableDirectives: 'off'},
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {'@typescript-eslint': tsPlugin},
		rules: {
			'no-var': 'error',
			'prefer-const': 'error',
			eqeqeq: 'error',
			'object-shorthand': 'error',
			'no-unneeded-ternary': 'error',
			'prefer-template': 'error',
			'no-useless-rename': 'error',
			'dot-notation': 'error',
			'no-extra-boolean-cast': 'error',
			'no-useless-escape': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
		},
	},
];
