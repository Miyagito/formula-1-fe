module.exports = {
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    printWidth: 80,
    endOfLine: 'lf',

    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        options: {
          parser: 'typescript',
        },
      },
    ],
  };
  