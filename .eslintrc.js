module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:jsx-a11y/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "semi": ["error", "never"],
        "no-dupe-keys": "off",
        "no-console": "off",
        "no-shadow": "off",
        "no-script-url": "off",
        "func-names": "off",
        "no-unused-vars": "off",
        "no-unused-expressions": "off",
        "react/no-unused-state": "off",
        "no-param-reassign": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "no-plusplus": "off",
        "constructor-super": "off",
        "react/jsx-props-no-spreading": "off",
        "max-classes-per-file": "off",
        "react/jsx-fragments": "off",
        "class-methods-use-this": "off",
        "no-use-before-define": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "eol-last": "off",
        "max-len": ["error", { "code": 300 }],
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        'linebreak-style': ["off", "windows"],
        'react/jsx-indent-props': "off",
        'react/destructuring-assignment': "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": 0,
        "no-template-curly-in-string": "off",
        "react/jsx-one-expression-per-line": 0,
        "import/no-unresolved": [2, { "ignore": ["^@/"] /* @ 是设置的路径别名*/ },],
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "latest",
        },
    },
};