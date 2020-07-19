module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
