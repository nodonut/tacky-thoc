export default {
    env: {
        browser: true,
        node: true,
    },
    extends: ['prettier'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['html', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
