import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSecurity from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                JSX: true,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            import: eslintPluginImport,
            'unused-imports': eslintPluginUnusedImports,
            'jsx-a11y': eslintPluginJsxA11y,
            promise: eslintPluginPromise,
            security: eslintPluginSecurity,
            'simple-import-sort': simpleImportSort,
            prettier: eslintPluginPrettier,
        },
        rules: {
            // Prettier integration
            'prettier/prettier': 'warn',

            // Unused imports
            'unused-imports/no-unused-imports': 'warn',

            // Import sorting
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',

            // React JSX settings
            'react/react-in-jsx-scope': 'off',

            // Optional: Disable unsupported ES syntax warnings for ESM
            'node/no-unsupported-features/es-syntax': 'off',

            // Add some recommended @typescript-eslint rules (can extend more as needed)
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
