# @alpha-dao/shared-config

## Usage

### Shared Config

Wondering which configuration to use when starting a new project? Then you're probably looking for this module.

```bash
yarn add -D @alpha-dao/shared-config
```

```jsonc
// tsconfig.json
{
  "extends": "@alpha-dao/shared-config",
  "compilerOptions": {
    "outDir": "build"
  }
}
```

```js
// .prettierrc.js
module.exports = {
  ...require("@alpha-dao/shared-config/prettier"),
};
```

#### Extending Hierarchy

`${your-project}` 👉 `@alpha-dao/shared-config` 👉 `@alpha-dao/${individual-config}`

### Submodules

If you're using a single tool or looking for a way to use a specific version, don't worry! We divided each config into submodules.

### @alpha-dao/tsconfig

- Configurations for [**TypeScript**](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- Add configurations [here](https://github.com/alpha-dao/config/blob/main/packages/tsconfig/tsconfig.json) 👍

```jsonc
// tsconfig.json
{
  "extends": "@alpha-dao/tsconfig",
  "compilerOptions": {
    "outDir": "build"
  }
}
```

### @alpha-dao/prettier

- Configurations for [**Prettier**](https://prettier.io/docs/en/options.html)
- Add Prettier rules [here](https://github.com/alpha-dao/config/blob/main/packages/prettier/index.js) 👍

```js
// .prettierrc.js
module.exports = {
  ...require("@alpha-dao/prettier"),
};
```
