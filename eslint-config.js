module.exports = {
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true
  },
  ecmaFeatures: {
    modules: true
  },
  rules: {
    'no-var': [1],
    'generator-star-spacing': [ 1, {
      before: false,
      after: true
    }],
    'space-in-parens': [ 1, 'never' ],
    'space-before-blocks': [ 1, 'always' ],
    'space-in-brackets': [ 1, 'always', {
       singleValue: false,
       objectsInArrays: false,
       arraysInArrays: false,
       arraysInObjects: false,
       objectsInObjects: false,
       propertyName: false
    }],
    'no-lonely-if': [2],
    'default-case': [2],
    quotes: [ 1, 'single', 'avoid-escape' ],
    strict: [ 2, 'never' ],
    'no-use-before-define': [ 2, 'nofunc' ],
    camelcase: [ 2, {
      properties: 'never'
    }],
    'no-underscore-dangle': [0],
    'new-cap': [ 2, {
      newIsCap: true,
      capIsNew: false
    }],
    semi: [0],
    curly: [ 1, 'multi-line' ],
    'no-multi-spaces': [2]
  }
}
