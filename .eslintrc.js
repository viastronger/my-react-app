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
        "semi": 1,
        "no-dupe-keys": "off",
        "no-console": "off",
        "react/jsx-fragments": "off",
        "indent":[2,4],
        "react/jsx-indent":[2,4],     
        'linebreak-style': ["off", "windows"],   
        'react/jsx-indent-props': "off",   
        'react/destructuring-assignment': "off",   
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function":0,
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "latest",
        },
    },
};