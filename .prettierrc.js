module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^@lib/(.*)$',
        '^@components/(.*)$',
        '^@(server|trpc)/(.*)$',
        '^@pages/(.*)$',
        '^@types/(.*)$',
        '^~/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
