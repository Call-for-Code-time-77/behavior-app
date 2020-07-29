module.exports = {
	env: {
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/style-prop-object': [
			'error',
			{
				allow: ['StatusBar'],
			},
		],
		'import/prefer-default-export': 'off',
		'no-shadow': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'react/jsx-one-expression-per-line': 'off',
		'global-require': 'off',
		'react-native/no-raw-text': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		camelcase: 'off',
		'no-console': ['error', { allow: ['log', 'disableYellowBox'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
