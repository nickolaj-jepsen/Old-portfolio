const path = require('path');

module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier', 'graphql'],
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': 'error',

    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(__dirname, './graphql.schema.json'),
        tagName: 'graphql',
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
};
