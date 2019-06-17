module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    // indentation
    "indent": [ 2 ],

    // spacing
    "template-curly-spacing": [ 2, "always" ],
    "object-curly-spacing": [ 2, "always" ],
    "computed-property-spacing": [ 2, "always" ],
    "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],

    // strings
    "quotes": [ 2, "single", "avoid-escape" ],

    "no-use-before-define": [ 2, { "functions": false } ],
        
    // react
    "react/prefer-es6-class": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-indent": [ 2, 4 ]
  }

}