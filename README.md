# @alpha-dao/config

## Usage

### TypeScript
Extend your own `tsconfig.json` file from `@alpha-dao/config/typescript`, which refers to the static JSON file.

```json
{
  "extends": "@alpha-dao/config/typescript",
  "compilerOptions": {
    "outDir": "build"
  }
}
```

### Prettier
Extend your own configurations in `.prettierrc.js` with the spread operator as follows:

```js
module.exports = {
  ...require('@alpha-dao/config/prettier'),
}
```
