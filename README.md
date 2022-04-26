# @alpha-dao/config

## Usage

### TypeScript

- Add configurations [here](https://github.com/alpha-dao/config/blob/main/tsconfig.json) 👍
- Extend your own `tsconfig.json` file from `@alpha-dao/config/tsconfig.json`, which refers to the static JSON file.

```json
{
  "extends": "@alpha-dao/config/tsconfig.json",
  "compilerOptions": {
    "outDir": "build"
  }
}
```

### Prettier

- Add Prettier rules [here](https://github.com/alpha-dao/config/blob/main/prettier.js) 👍
- Extend your own configurations in `.prettierrc.js` with the spread operator as follows:

```js
module.exports = {
  ...require("@alpha-dao/config/prettier"),
};
```
