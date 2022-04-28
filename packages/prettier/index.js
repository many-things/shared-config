module.exports = {
  semi: true,
  plugins: [require("@trivago/prettier-plugin-sort-imports")],

  // @trivago/prettier-plugin-sort-imports
  importOrder: ["<THIRD_PARTY_MODULES>", "@/(.*)$", "^[./](.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    "jsx",
    "typescript",
    '["decorators", { "decoratorsBeforeExport": true }]',
  ],
};
