module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'import/no-cycle':0,
        'no-console':0,
        'react/prop-types':0,
        'linebreak-style':0,
        'react/state-in-constructor':0,
        'import/prefer-default-export':0,
        'max-len':[2,50],
        'object-curly-newline':0,
        'react/jsx-filename-extension':0,
        'react/jsx-one-expression-per-line':0,
        'jsx-ally/click-events-have-key-events':0,
        'jsx-ally/alt-text':0,
        'jsx-ally/no-autofocus':0,
        'jsx-ally/no-static-element-interactions':0,
        'react/no-array-index-key':0,
        'no-param-reassign':0,
        'react/react-in-jsx-scope':0,
        'react/jsx-props-no-speading':0,
        'no-sparse-arrays':0,
        'no-array-index-key':0,
        camelcase:0,
        
    },
}
