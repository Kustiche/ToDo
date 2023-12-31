// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'rules': {
		'array-bracket-newline': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', 'never'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'block-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs'],
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'always-multiline',
		}],
		'comma-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'dot-location': ['error', 'object'],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'never'],
		'function-paren-newline': ['error', 'never'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'indent': ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true,
		}],
		'keyword-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'line-comment-position': ['error', {
			'position': 'beside',
			'ignorePattern': 'pragma',
		}],
		'linebreak-style': ['error', 'windows'],
		'lines-around-comment': ['error', {
			'beforeBlockComment': true,
			'afterBlockComment': true,
			'beforeLineComment': true,
			'afterLineComment': true,
		}],
		'lines-between-class-members': ['error', 'never'],
		'new-parens': ['error', 'always'],
		'no-multi-spaces': ['error'],
		'no-multiple-empty-lines': ['error', {'max': 1}],
		'no-trailing-spaces': ['error', {
			'skipBlankLines': false,
			'ignoreComments': false,
		}],
		'object-curly-newline': ['error', {
			'ObjectExpression': {'multiline': true},
			'ObjectPattern': {'multiline': true},
			'ImportDeclaration': 'never',
			'ExportDeclaration': 'never',
		}],
		'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
		'semi': ['error', 'always'],
		'semi-spacing': ['error', {
			'before': false,
			'after': false,
		}],
		'semi-style': ['error', 'last'],
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'never',
		}],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error'],
	},
};
