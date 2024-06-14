module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb/base',
		'react-app',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['react', 'prettier', 'import'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.3' },
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		},
	},
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/prop-types': 0,
	},
};
