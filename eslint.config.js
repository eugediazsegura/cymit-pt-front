import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
export default [
    {
        plugins: {
            react: reactPlugin
        },
        rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
        },
        settings: {
            react: {
                version: 'detect', // para detectar la versión de react en caso de error
            }
        }
    },
    {
        plugins: {
            'react-hooks': reactHooks
        },
        rules: {
            ...reactHooks.configs.recommended.rules
        }
    },
    {
        ignores: ['./dist/*']
    },
    js.configs.recommended
]
