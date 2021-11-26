module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json'],
	},
	plugins: [
		'@typescript-eslint',
		'@fintechstudios/eslint-plugin-chai-as-promised'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@fintechstudios/chai-as-promised/recommended',
		'plugin:prettier/recommended'
	],
	rules: {
		"prettier/prettier": ["error", {
			"semi": true,
			"trailingComma": 'all',
			"singleQuote": true,
			"printWidth": 160,
			"tabWidth": 4,
			"endOfLine": "auto"
		}],
		"camelcase": 0,
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/require-await": "off",
		"@typescript-eslint/no-use-before-define": ["error", "nofunc"]
	}
};
